import { CollectionReference, DocumentData, Firestore, QueryDocumentSnapshot, 
	doc, getDocs, query, setDoc, where } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore"; 
import Model from "@/lib/models/model";
import { InstanceNotFoundException, MultipleInstancesFoundException, Repository } from "./repository";
import Serializer from "../serializers/serializer";


export abstract class FireStoreRepository<P, M extends Model<P>> implements Repository<P, M>{

	private collection: CollectionReference;
	private collectionName: string;
	private primaryKeyColumn: string;
	private serializer: Serializer<M, DocumentData>;
	private attachMode: boolean = true;

 	constructor(
		firestore: Firestore,
		collectionName: string,
		primaryKeyColumn: string,
		serializer: Serializer<M, DocumentData>
	){
		this.collection = collection(firestore, collectionName);
		this.collectionName = collectionName;
		this.primaryKeyColumn = primaryKeyColumn;
		this.serializer = serializer;
	}
	
	protected async getDocument(pk: P): Promise<QueryDocumentSnapshot<DocumentData>>{
		let pkQuery = query(this.collection, where(this.primaryKeyColumn, "==", pk));
		let docs = (await getDocs(pkQuery)).docs;
		if(docs.length == 0){
			throw new InstanceNotFoundException(this.collectionName, pk);
		}
		if(docs.length > 1){
			throw new MultipleInstancesFoundException(this.collectionName, pk);
		}
		return docs[0];
	}

	public async getByPrimaryKey(pk: P): Promise<M>{
		return await this.firebaseFetch(
			async () => {
				return (await this.getDocument(pk)).data()
			},
			false
		) as M;
	}

	private async processDocumentData(data: DocumentData): Promise<M>{
		let instance = this.serializer.deserialize(data)
		if(this.attachMode){
			await this.attachForeignKeys(instance)
		}
		return instance;
	}

	protected async firebaseFetch(fetcher: Function, many: boolean = false): Promise<M|M[]>{

		let data: DocumentData | DocumentData[] = await fetcher()
		if(many){
			let instances: M[] = []
			for(let instanceData of (data as DocumentData[])){
				instances.push(await this.processDocumentData(instanceData))
			}
			return instances;
		}
		return await this.processDocumentData(data);

	}

	public abstract generateNewPK(instance: M): Promise<P>

	public async create(instance: M){
		if(instance.getPK() === null){
			instance.setPK(await this.generateNewPK(instance));
		}

		let data: DocumentData = this.serializer.serialize(instance);
		await addDoc(this.collection, data);
	}

	public async update(instance: M){
		let document = await this.getDocument(instance.getPK()!);
		let data = this.serializer.serialize(instance);
		await setDoc(doc(this.collection, document.id), data);
	}

	public async save(instance: M){
		try{
			await this.update(instance);
		}
		catch(ex: any){
			if(!(ex instanceof InstanceNotFoundException)){
				throw ex;
			}
			await this.create(instance);

		}
	}

	public async getAll(): Promise<M[]> {
		return await this.firebaseFetch(
			async () => {
				return (await getDocs(this.collection)).docs.map((snapshot: QueryDocumentSnapshot<DocumentData>) => { return snapshot.data() });
			},
			true
		) as M[]
	}

	public setAttachMode(mode: boolean){
		this.attachMode = mode;
	}

	public abstract attachForeignKeys(instance: M): Promise<void>
}

