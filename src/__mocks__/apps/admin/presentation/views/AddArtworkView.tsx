import WriteArtworkView from "./WriteArtworkView"
import EditArtworkViewModel from "@/apps/admin/application/viewmodels/editArtworkViewModel"
import AddArtworkViewModel from "@/apps/admin/application/viewmodels/addArtworkViewModel"


export default class AddArtworkView  extends WriteArtworkView<any>{

	protected createViewModel(): EditArtworkViewModel {
		return new AddArtworkViewModel(this.state, this.setState.bind(this))
	}

}