import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import BlogListState from "../state/blogListState";
import BlogRepository from "../../data/repositories/blogRepository";
import CoreProviders from "../../di/coreproviders";


export default class BlogListViewModel extends AsyncViewModel<BlogListState>{

	private repository: BlogRepository = CoreProviders.provideBlogRepository();

	public async onInit(): Promise<void> {
		await super.onInit();
		this.state.blogs = await this.repository.getAll();
	}

}