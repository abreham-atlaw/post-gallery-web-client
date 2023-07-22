import Serializer from "@/lib/serializers/serializer";
import Blog from "../models/blog";
import { DocumentData } from "firebase/firestore";



export default class BlogSerializer extends Serializer<Blog, DocumentData>{
    serialize(instance: Blog): DocumentData {
        return {
            id: instance.getPK(),
            title: instance.title,
			content: instance.content,
			cover: instance.cover
        };
    }
    deserialize(data: DocumentData): Blog {
		return new Blog(
			data.id,
			data.title,
			data.cover,
			data.content
		);
    }

}