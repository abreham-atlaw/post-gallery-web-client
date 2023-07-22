import AsyncViewModel from "@/lib/viewmodel/asyncViewModel"
import BlogDetailState from "../state/blogDetailState";
import BlogRepository from "../../data/repositories/blogRepository";
import CoreProviders from "../../di/coreproviders";



export default class BlogDetailViewModel extends AsyncViewModel<BlogDetailState>{

	private repository: BlogRepository = CoreProviders.provideBlogRepository();

	public async onInit(): Promise<void> {
		await super.onInit();
		this.state.blog = await this.repository.getByPrimaryKey(this.state.blogId);
	}

}