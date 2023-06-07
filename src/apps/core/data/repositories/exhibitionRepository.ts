import { FireStoreRepository } from "@/lib/repositories/firestoreRepository";
import Exhibition from "../models/exhibition";
import SerialPkGenerator from "@/lib/repositories/serialPkGenerator";
import CoreProviders from "../../di/coreproviders";
import ExhibitionSerializer from "../serializers/exhibitionSerializer";



export default class ExhibitionRepository extends FireStoreRepository<string, Exhibition>{
	
	private primaryKeyGenerator;
	private artistRepository = CoreProviders.provideArtistRepository();

	constructor(){
		super(
			CoreProviders.provideFirestoreDB(),
			"exhibition",
			"id",
			new ExhibitionSerializer()
		);
		this.primaryKeyGenerator = new SerialPkGenerator(this, "Ex", 5);
	}
	
	public generateNewPK(_instance: Exhibition): Promise<string> {
		return this.primaryKeyGenerator.generateNewPK();
	}
	
	public async attachForeignKeys(instance: Exhibition): Promise<void> {
		instance.artist = await this.artistRepository.getByPrimaryKey(instance.artistId);
	}

}