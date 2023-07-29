import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import BlogListState from "../state/blogListState";
import PublishmentRepository from "../../data/repositories/publishmentRepository";
import CoreProviders from "../../di/coreproviders";


export default class BlogListViewModel extends AsyncViewModel<BlogListState>{

	private repository: PublishmentRepository = CoreProviders.provideBlogRepository();

	public async onInit(): Promise<void> {
		await super.onInit();
		this.state.blogs = await this.repository.getAll();
	}

}