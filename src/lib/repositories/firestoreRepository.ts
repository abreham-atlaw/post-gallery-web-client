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
		let doc = await this.getDocument(pk);
		return this.serializer.deserialize(doc.data());
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
		await setDoc(doc(this.collection, this.collectionName, document.id), data);
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
		let querySnapshots = await getDocs(this.collection);
		return this.serializer.deserializeMany(querySnapshots.docs.map(
			(snapshot: QueryDocumentSnapshot<DocumentData>) => {
				return snapshot.data;
			}
		));
	}
}

