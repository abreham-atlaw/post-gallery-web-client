import ViewModel from "@/lib/viewmodel/viewmodel";
import ExhibitionListState from "../state/exhibitionListState";
import CoreProviders from "../../di/coreproviders";


export default class ExhibitionListViewModel extends ViewModel<ExhibitionListState>{

	private repository = CoreProviders.provideExhibitionRepository();


	public async onInit(): Promise<void> {
		await super.onInit();
		this.state.exhibitions = await this.repository.getAll()
	}


}