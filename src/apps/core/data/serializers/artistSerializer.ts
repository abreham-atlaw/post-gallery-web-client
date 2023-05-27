import Serializer from "@/lib/serializers/serializer"
import { DocumentData } from "firebase/firestore";
import Artist from "../models/artist";


export default class ArtistSerializer extends Serializer<Artist, DocumentData> {

	serialize(instance: Artist): DocumentData {
	  return {
		id: instance.id,
		fullName: instance.fullName,
		age: instance.age,
		gender: instance.gender,
		email: instance.email,
		phoneNumber: instance.phoneNumber,
		nationality: instance.nationality,
	  };
	}
  
	deserialize(data: DocumentData): Artist {
	  return new Artist(
		data.id,
		data.fullName,
		data.age,
		data.gender,
		data.phoneNumber,
		data.email,
		data.nationality,
	  );
	}
  
  }