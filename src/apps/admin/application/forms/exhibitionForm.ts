import CoreProviders from "@/apps/core/di/coreproviders"
import Field, { ListField, PrimaryKeyField, TextField } from "@/lib/forms/fields"
import Form from "@/lib/forms/form"



export default class ExhibitionForm extends Form{
	
	public artistId = new PrimaryKeyField(CoreProviders.provideArtistRepository())

	public name = new TextField()
	public description = new TextField()

	public curator = new TextField()
	public venue = new TextField()

	public startDate = new Field<Date>()
	public endDate = new Field<Date>()

	public startTime = new Field<number>()
	public endTime = new Field<number>()

	public coverImage = new TextField()
	public images = new ListField<string>()

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
