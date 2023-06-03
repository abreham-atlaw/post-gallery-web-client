import AddArtistViewModel from "@/apps/admin/application/viewmodels/addArtistViewModel"
import WriteArtistView from "./writeArtistView"
import EditArtistViewModel from "@/apps/admin/application/viewmodels/editArtistViewModel"


export default class AddArtistView  extends WriteArtistView<any>{

	protected createViewModel(): EditArtistViewModel {
		return new AddArtistViewModel(this.state, this.setState.bind(this))
	}

}