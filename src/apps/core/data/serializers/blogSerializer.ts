import Serializer from "@/lib/serializers/serializer";
import Blog from "../models/blog";
import { DocumentData } from "firebase/firestore";



class BlogSerializer extends Serializer<Blog, DocumentData>{
    serialize(instance: Blog): DocumentData {
        return {
            id: instance.getPK(),
            title: instance.title,
            

        }
    }
    deserialize(data: DocumentData): Blog {
        throw new Error("Method not implemented.");
    }

}