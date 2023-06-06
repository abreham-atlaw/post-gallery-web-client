import WriteExhibitionState from "@/apps/admin/application/states/writeExhibitionState";
import EditExhibitionViewModel from "@/apps/admin/application/viewmodels/editExhibitionViewModel";
import WriteExhibitionView from "./WriteExhibitionView";
import AddExhibitionViewModel from "@/apps/admin/application/viewmodels/addExhibitionViewModel";



export default class AddExhibitionView extends WriteExhibitionView<any>{

	onCreateViewModel(state: WriteExhibitionState): EditExhibitionViewModel {
		return new AddExhibitionViewModel(state, this.setState.bind(this));
	}

}