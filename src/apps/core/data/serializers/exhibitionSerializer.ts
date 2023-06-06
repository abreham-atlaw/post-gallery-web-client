import Serializer from "@/lib/serializers/serializer";
import { DocumentData } from "firebase/firestore";
import Exhibition from "../models/exhibition";
import { DateSerializer } from "@/lib/serializers/fieldSerializers";


export default class ExhibitionSerializer extends Serializer<Exhibition, DocumentData> {

  private dateSerializer = new DateSerializer();

  serialize(instance: Exhibition): DocumentData {
    return {
      id: instance.id,
      artist_id: instance.artistId,
      name: instance.name,
      description: instance.description,
      start_date: instance.startDate,
      end_date: instance.endDate,
      venue: instance.venue
    };
  }

  deserialize(data: DocumentData): Exhibition {
    return new Exhibition(
      data.id,
      data.artist_id,
      data.name,
      data.description,
      this.dateSerializer.deserialize(data.start_date),
      this.dateSerializer.deserialize(data.end_date),
      data.venue
    );
  }
}