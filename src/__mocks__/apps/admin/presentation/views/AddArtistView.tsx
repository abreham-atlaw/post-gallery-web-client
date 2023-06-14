import AddArtistViewModel from "@/apps/admin/application/viewmodels/addArtistViewModel"
import WriteArtistView from "./WriteArtistView"
import EditArtistViewModel from "@/apps/admin/application/viewmodels/editArtistViewModel"
import { Gender } from "@/apps/core/data/models/gender"


export default class AddArtistView extends WriteArtistView<any>{

	protected createViewModel(): EditArtistViewModel {
		return new AddArtistViewModel(this.state, this.setState.bind(this))
	}

}