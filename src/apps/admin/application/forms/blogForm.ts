import Field, { TextField } from "@/lib/forms/fields";
import Form from "@/lib/forms/form"
import { formatWithOptions } from "util";



export default class BlogForm extends Form{
	
	title = new TextField();
	cover = new TextField();
	content = new TextField();

	getFields(): Field<any>[] {
		return [
			this.title,
			this.cover,
			this.content
		];
	}

}