import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import WritePublishmentState from "../states/writePublishmentState";
import PublishmentRepository from "@/apps/core/data/repositories/publishmentRepository";
import CoreProviders from "@/apps/core/di/coreproviders";
import Blog from "@/apps/core/data/models/publishment";
import EditArtFairViewModel from "./editArtFairViewModel";
import ArtFair from "@/apps/core/data/models/artFair";
import ArtFairRepository from "@/apps/core/data/repositories/artFairRepository";



export default class EditPublishmentViewModel extends AsyncViewModel<WritePublishmentState>{

	private repository: PublishmentRepository = new PublishmentRepository();
	private artFairRepository: ArtFairRepository = new ArtFairRepository(false);

	public artFairViewModel?: EditArtFairViewModel;

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

	private syncArtFairToForm(){
		let form = this.state.artFairform;
		let artFair = this.state.artFair!;
		form.name.setValue(artFair.name);
		form.cover.setValue(artFair.cover);
		form.link.setValue(artFair.link);
		form.visible.setValue(artFair.visible)
	}

	private syncToArtFair(){
		let form = this.state.artFairform;
		let artFair = this.state.artFair!;
		
		artFair.name = form.name.getValue()!;
		artFair.link = form.link.getValue()!;
		artFair.cover = form.cover.getValue()!;
		artFair.visible = form.visible.getValue()!;
	}

	protected async getPublishment(): Promise<Blog>{
		return await this.repository.getByPrimaryKey(this.state.publishmentId!);
	}

	protected async getArtFair(): Promise<ArtFair>{
		return await this.artFairRepository.getByPrimaryKey(this.state.artFairId!);
	}

	public async onInit(): Promise<void> {
		await super.onInit();
		try{
			this.state.publishment = await this.getPublishment();
			this.syncToForm()
		}
		catch(ex){

		}
		try{
			this.state.artFair = await this.getArtFair();
			this.syncArtFairToForm();
		}
		catch(ex){

		}
	}

	async save(){
		await this.asyncCall(async () => {
			await this.state.form.validate(true);
			this.syncToPublishment();
			await this.repository.save(this.state.publishment!);
		});
	}

	async saveArtFair(){
		await this.asyncCall(async () => {
			await this.state.artFairform.validate(true);
			this.syncToArtFair();
			await this.artFairRepository.save(this.state.artFair!);
		});
	}

}