import { FireStoreRepository } from "@/lib/repositories/firestoreRepository";
import Exhibition, { ExhibitionStatus } from "../models/exhibition";
import SerialPkGenerator from "@/lib/repositories/serialPkGenerator";
import CoreProviders from "../../di/coreproviders";
import ExhibitionSerializer from "../serializers/exhibitionSerializer";
import Artwork from "../models/artwork";
import { DBConfigs } from "@/configs/data_configs";
import { sleep } from "@/lib/utils/time";
import ArtworkRepository from "./artworkRepository";
import ArtistRepository from "./artistRepository";
import { getDocs, query, where } from "firebase/firestore";



export default class ExhibitionRepository extends FireStoreRepository<string, Exhibition>{
	
	private primaryKeyGenerator;
	public artistRepository = new ArtistRepository();
	public  artworkRepository = new ArtworkRepository();

	constructor(){
		super(
			CoreProviders.provideFirestoreDB(),
			"exhibition",
			"id",
			new ExhibitionSerializer()
		);
		this.primaryKeyGenerator = new SerialPkGenerator(this, DBConfigs.PRIMARY_KEY_PREFIX, DBConfigs.PRIMARY_KEY_SERIAL_DIGITS, " - EX");
	}
	
	public generateNewPK(_instance: Exhibition): Promise<string> {
		return this.primaryKeyGenerator.generateNewPK();
	}

	public async getByStatus(status: ExhibitionStatus): Promise<Exhibition>{
		return await (this.firebaseFetch(
			async () => {
				let fetchQuery = query(this.collection, where("status", "==", status))
				let docs = (await getDocs(fetchQuery)).docs;
				return docs[0].data();
			}, false
		)) as Exhibition;
	}
	
	public async attachForeignKeys(instance: Exhibition): Promise<void> {
		instance.artworks = []
		for(let artworkId of instance.artworkIds){
			let value = await this.artworkRepository.getByPrimaryKey(artworkId);
			instance.artworks.push(value);
		}
		
		this.artistRepository.setAttachMode(false);
		instance.artist = await this.artistRepository.getByPrimaryKey(instance.artistId);

	}

}