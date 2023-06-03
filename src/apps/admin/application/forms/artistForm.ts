import { Gender } from "@/apps/core/data/models/gender";
import Field, { TextField } from "@/lib/forms/fields";
import Form from "@/lib/forms/form";



export default class ArtistForm extends Form{
	
	fullName: TextField = new TextField()
	gender: Field<Gender> = new Field<Gender>()
	email: TextField = new TextField()
	phoneNumber: TextField = new TextField()
	nationality: TextField = new TextField()
	dateOfBirth: Field<Date> = new Field<Date>()
	biography: TextField = new TextField()

	getFields(): Field<any>[] {
		return [
			this.fullName,
			this.gender,
			this.email,
			this.phoneNumber,
			this.nationality,
			this.dateOfBirth,
			this.biography
		]
	}

}