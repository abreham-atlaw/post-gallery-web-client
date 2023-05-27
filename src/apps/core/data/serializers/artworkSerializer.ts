import Serializer from "@/lib/serializers/serializer";
import Artwork from "../models/artwork";
import { DocumentData } from "firebase/firestore";


export default class ArtworkSerializer extends Serializer<Artwork, DocumentData> {

	serialize(instance: Artwork): DocumentData {
	  return {
		id: instance.id,
		artistId: instance.artistId,
		name: instance.name,
		description: instance.description,
		price: instance.price,
		dimension: instance.dimension,
		status: instance.status,
		creationDate: instance.creationDate.toISOString(),
		mediaUsed: instance.mediaUsed,
	  };
	}
  
	deserialize(data: DocumentData): Artwork {
	  return new Artwork(
		data.id,
		data.artistId,
		data.name,
		data.description,
		data.price,
		data.dimension,
		data.status,
		new Date(data.creationDate),
		data.mediaUsed,
	  );
	}
  
  }