import Blog, { PublishmentType } from "@/apps/core/data/models/publishment";
import EditPublishmentViewModel from "./editPublishmentViewModel";
import Publishment from "@/apps/core/data/models/publishment";


export default class AddPublishmentViewModel extends EditPublishmentViewModel{

	protected async getPublishment(): Promise<Blog> {
		return new Publishment(
			null,
			"",
			"",
			"",
			PublishmentType.blog,
			true
		);
	}

	public async onInit(): Promise<void> {
		await super.onInit();
	}

}