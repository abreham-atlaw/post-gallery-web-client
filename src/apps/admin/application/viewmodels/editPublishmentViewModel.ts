import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import WritePublishmentState from "../states/writePublishmentState";
import PublishmentRepository from "@/apps/core/data/repositories/publishmentRepository";
import CoreProviders from "@/apps/core/di/coreproviders";
import Blog from "@/apps/core/data/models/publishment";



export default class EditPublishmentViewModel extends AsyncViewModel<WritePublishmentState>{

	private repository: PublishmentRepository = new PublishmentRepository();

	private syncToForm(){
		let form = this.state.form;
		let blog = this.state.publishment!;
		form.content.setValue(blog.content);
		form.cover.setValue(blog.cover);
		form.title.setValue(blog.title);
		form.publishmentType.setValue(blog.type);
		form.visible.setValue(blog.visible)
	}

	private syncToPublishment(){
		let form = this.state.form;
		let blog = this.state.publishment!;
		blog.content = form.content.getValue()!;
		blog.cover = form.cover.getValue()!;
		blog.title = form.title.getValue()!;
		blog.type = form.publishmentType.getValue()!;
		blog.visible = form.visible.getValue()!;
	}

	protected async getPublishment(): Promise<Blog>{
		return await this.repository.getByPrimaryKey(this.state.publishmentId!);
	}

	public async onInit(): Promise<void> {
		await super.onInit();
		this.state.publishment = await this.getPublishment();
	}

	async save(){
		await this.asyncCall(async () => {
			await this.state.form.validate(true);
			this.syncToPublishment();
			await this.repository.save(this.state.publishment!);
		});
	}

}