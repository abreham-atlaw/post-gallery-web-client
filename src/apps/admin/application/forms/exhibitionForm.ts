import Field, { TextField } from "@/lib/forms/fields"
import Form from "@/lib/forms/form"



export default class ExhibitionForm extends Form{
	
	public artistId = new TextField()

	public name = new TextField()
	public description = new TextField()

	public curator = new TextField()
	public venue = new TextField()

	public startDate = new Field<Date>()
	public endDate = new Field<Date>()

	public startTime = new Field<number>()
	public endTime = new Field<number>()

	getFields(): Field<any>[] {
		return [
			this.artistId,
			this.name,
			this.description,
			this.curator,
			this.venue,
			this.startDate,
			this.endDate,
			this.startTime,
			this.endTime
		]
	}


}
