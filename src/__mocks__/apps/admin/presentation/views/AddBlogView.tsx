import WriteBlogState from "@/apps/admin/application/states/writeBlogState";
import EditBlogViewModel from "@/apps/admin/application/viewmodels/editBlogViewModel";
import WriteBlogView from "./WriteBlogView";
import AddBlogViewModel from "@/apps/admin/application/viewmodels/addBlogViewModel";


export default class AddBlogView extends WriteBlogView<any>{
	onCreateViewModel(state: WriteBlogState): EditBlogViewModel {
		return new AddBlogViewModel(state, this.setState.bind(this));
	}
	onCreateState(): WriteBlogState {
		return new WriteBlogState();
	}

}