import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import WriteBlogState from "../states/writeBlogState";
import BlogRepository from "@/apps/core/data/repositories/blogRepository";
import CoreProviders from "@/apps/core/di/coreproviders";
import Blog from "@/apps/core/data/models/blog";



export default class EditBlogViewModel extends AsyncViewModel<WriteBlogState>{

	private repository: BlogRepository = CoreProviders.provideBlogRepository();

	private syncToForm(){
		let form = this.state.form;
		let blog = this.state.blog!;
		form.content.setValue(blog.content);
		form.cover.setValue(blog.cover);
		form.title.setValue(blog.title);
	}

	private syncToBlog(){
		let form = this.state.form;
		let blog = this.state.blog!;
		blog.content = form.content.getValue()!;
		blog.cover = form.cover.getValue()!;
		blog.title = form.title.getValue()!;
	}

	protected async getBlog(): Promise<Blog>{
		return await this.repository.getByPrimaryKey(this.state.blogId!);
	}

	public async onInit(): Promise<void> {
		await super.onInit();
		this.state.blog = await this.getBlog();
	}

	async save(){
		await this.asyncCall(async () => {
			await this.state.form.validate(true);
			this.syncToBlog();
			await this.repository.save(this.state.blog!);
		});
	}

}