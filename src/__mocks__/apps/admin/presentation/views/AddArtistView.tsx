import AddArtistViewModel from "@/apps/admin/application/viewmodels/addArtistViewModel"
import WriteArtistView from "./WriteArtistView"
import EditArtistViewModel from "@/apps/admin/application/viewmodels/editArtistViewModel"
import { Gender } from "@/apps/core/data/models/gender"


export default class AddArtistView  extends WriteArtistView<any>{

	protected createViewModel(): EditArtistViewModel {
		this.state.form.firstName.setValue("Jermaine")
		this.state.form.lastName.setValue("Cole")
		this.state.form.biography.setValue("The quick brown fox jumps over the lazy dog.")
		this.state.form.email.setValue("abreham.atlaw@yahoo.com")
		this.state.form.gender.setValue(Gender.male)
		this.state.form.nationality.setValue("Ethiopian")
		this.state.form.phoneNumber.setValue("Phone Number")

		return new AddArtistViewModel(this.state, this.setState.bind(this))
	}

}