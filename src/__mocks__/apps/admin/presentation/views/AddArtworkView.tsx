import AddArtistViewModel from "@/apps/admin/application/viewmodels/addArtistViewModel"
import WriteArtistView from "./WriteArtistView"
import EditArtistViewModel from "@/apps/admin/application/viewmodels/editArtistViewModel"
import WriteArtworkView from "./WriteArtworkView"
import EditArtworkViewModel from "@/apps/admin/application/viewmodels/editArtworkViewModel"
import AddArtworkViewModel from "@/apps/admin/application/viewmodels/addArtworkViewModel"


export default class AddArtworkView  extends WriteArtworkView<any>{

	protected createViewModel(): EditArtworkViewModel {
		return new AddArtworkViewModel(this.state, this.setState.bind(this))
	}

}