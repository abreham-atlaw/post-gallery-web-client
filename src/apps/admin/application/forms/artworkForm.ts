import { Status } from "@/Models/Core/artwork";
import Field, { ListField, TextField } from "@/lib/forms/fields";
import Form from "@/lib/forms/form";



export default class ArtworkForm extends Form{


	artistID: TextField = new TextField()
	name: TextField = new TextField()
	description: TextField = new TextField()
	price: Field<number> = new Field<number>();
	
	dimensionWidth: Field<number> = new Field<number>();
	dimensionHeight: Field<number> = new Field<number>();
	dimensionDepth: Field<number> = new Field<number>();

	status: Field<Status> = new Field<Status>();
	creationDate: Field<Date> = new Field<Date>();
	mediaUsed: TextField = new TextField();

	images: ListField<string> = new ListField<string>();

	
	getFields(): Field<any>[] {
		return [
			this.artistID,
			this.name,
			this.description,
			this.price,
			this.dimensionWidth,
			this.dimensionHeight,
			this.dimensionDepth,
			this.status,
			this.creationDate,
			this.mediaUsed
		]
	}

}