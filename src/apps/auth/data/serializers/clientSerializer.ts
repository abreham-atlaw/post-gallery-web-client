import { DocumentData } from "firebase/firestore";
import { Client } from "../models/accounts";
import Serializer from "@/lib/serializers/serializer";


export default class ClientSerializer extends Serializer<Client, DocumentData>{
	
	serialize(instance: Client): DocumentData {
		return {
			uid: instance.id,
			fullName: instance.fullName,
			phoneNumber: instance.phoneNumber
		}
	}
	deserialize(data: DocumentData): Client {
		return new Client(
			data.uid,
			data.fullName, 
			data.phoneNumber
		)
	}
	
	
}