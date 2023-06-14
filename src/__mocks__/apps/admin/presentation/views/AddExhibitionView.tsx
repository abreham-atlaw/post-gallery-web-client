import WriteExhibitionState from "@/apps/admin/application/states/writeExhibitionState";
import EditExhibitionViewModel from "@/apps/admin/application/viewmodels/editExhibitionViewModel";
import WriteExhibitionView from "./WriteExhibitionView";
import AddExhibitionViewModel from "@/apps/admin/application/viewmodels/addExhibitionViewModel";



export default class AddExhibitionView extends WriteExhibitionView<any>{

	onCreateViewModel(state: WriteExhibitionState): EditExhibitionViewModel {
		state.form.artistId.setValue("Ar00001")
		state.form.curator.setValue("Bethhoven")
		state.form.description.setValue("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")
		state.form.name.setValue("Neoplan")
		state.form.venue.setValue("Marble Exhibition Center")
		return new AddExhibitionViewModel(state, this.setState.bind(this));
	}

}