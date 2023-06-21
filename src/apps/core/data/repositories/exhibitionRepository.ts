import { FireStoreRepository } from "@/lib/repositories/firestoreRepository";
import Exhibition from "../models/exhibition";
import SerialPkGenerator from "@/lib/repositories/serialPkGenerator";
import CoreProviders from "../../di/coreproviders";
import ExhibitionSerializer from "../serializers/exhibitionSerializer";
import Artwork from "../models/artwork";
import { DBConfigs } from "@/configs/data_configs";



export default class ExhibitionRepository extends FireStoreRepository<string, Exhibition>{
	
	private primaryKeyGenerator;
	private artistRepository = CoreProviders.provideArtistRepository();
	private artworkRepository = CoreProviders.provideArtworkRepository()

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
	
	public async attachForeignKeys(instance: Exhibition): Promise<void> {
		instance.artist = await this.artistRepository.getByPrimaryKey(instance.artistId);
		instance.artworks = []
		for(let artworkId of instance.artworkIds){
			instance.artworks.push(await this.artworkRepository.getByPrimaryKey(artworkId))
		}
	}

}