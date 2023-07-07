import { FireStoreRepository } from "@/lib/repositories/firestoreRepository";
import Blog from "../models/blog";
import CoreProviders from "../../di/coreproviders";



class BlogRepository extends FireStoreRepository<string, Blog>{

    constructor(){
        super(
            CoreProviders.provideFirestoreDB(),
            "blogs",
            "id",
            new BlogSerializer()
        )
    }

    public generateNewPK(instance: Blog): Promise<string> {

    }
    public attachForeignKeys(instance: Blog): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}