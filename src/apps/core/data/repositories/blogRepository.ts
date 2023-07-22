import { FireStoreRepository } from "@/lib/repositories/firestoreRepository";
import Blog from "../models/blog";
import CoreProviders from "../../di/coreproviders";
import BlogSerializer from "../serializers/blogSerializer";
import { DBConfigs } from "@/configs/data_configs";
import SerialPkGenerator from "@/lib/repositories/serialPkGenerator";
import Artwork from "../models/artwork";



export default class BlogRepository extends FireStoreRepository<string, Blog>{

	private pkGenerator: SerialPkGenerator<Blog>;

    constructor(){
        super(
            CoreProviders.provideFirestoreDB(),
            "blogs",
            "id",
            new BlogSerializer()
        );
		this.pkGenerator = new SerialPkGenerator(this, DBConfigs.PRIMARY_KEY_PREFIX, DBConfigs.PRIMARY_KEY_SERIAL_DIGITS, " - BG");
    }

    public async generateNewPK(instance: Blog): Promise<string>{
		return await this.pkGenerator.generateNewPK();
    }
    public async attachForeignKeys(instance: Blog): Promise<void> {

    }
    
}