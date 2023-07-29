import { FireStoreRepository } from "@/lib/repositories/firestoreRepository";
import Blog from "../models/publishment";
import CoreProviders from "../../di/coreproviders";
import PublishmentSerializer from "../serializers/publishmentSerializer";
import { DBConfigs } from "@/configs/data_configs";
import SerialPkGenerator from "@/lib/repositories/serialPkGenerator";
import Artwork from "../models/artwork";



export default class PublishmentRepository extends FireStoreRepository<string, Blog>{

	private pkGenerator: SerialPkGenerator<Blog>;

    constructor(){
        super(
            CoreProviders.provideFirestoreDB(),
            "publishment",
            "id",
            new PublishmentSerializer()
        );
		this.pkGenerator = new SerialPkGenerator(this, DBConfigs.PRIMARY_KEY_PREFIX, DBConfigs.PRIMARY_KEY_SERIAL_DIGITS, " - PM");
    }

    public async generateNewPK(instance: Blog): Promise<string>{
		return await this.pkGenerator.generateNewPK();
    }
    public async attachForeignKeys(instance: Blog): Promise<void> {

    }
    
}