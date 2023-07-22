import Blog from "@/apps/core/data/models/blog";
import EditBlogViewModel from "./editBlogViewModel";


export default class AddBlogViewModel extends EditBlogViewModel{

	protected async getBlog(): Promise<Blog> {
		return new Blog(
			null,
			"",
			"",
			""
		);
	}

}