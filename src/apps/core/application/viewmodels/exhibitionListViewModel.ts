import ViewModel from "@/lib/viewmodel/viewmodel";
import ExhibitionListState from "../state/exhibitionListState";
import CoreProviders from "../../di/coreproviders";
import Exhibition from "../../data/models/exhibition";


export default class ExhibitionListViewModel extends ViewModel<ExhibitionListState>{

	private repository = CoreProviders.provideExhibitionRepository();


	public async onInit(): Promise<void> {
		await super.onInit();
		this.state.allExhibitions = await this.repository.getAll()
		this.updateExhibitions()
	}

	private updateExhibitions(){
		this.state.currentExhibitions = this.state.allExhibitions?.filter((exhibition: Exhibition) => exhibition.isActive())
		this.state.upcomingExhibitions = this.state.allExhibitions?.filter((exhibition: Exhibition) => exhibition.isUpcoming())
	}


}