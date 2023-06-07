import ViewModel from "@/lib/viewmodel/viewmodel";
import ExhibitionDetailState from "../state/exhibitionDetailState";
import CoreProviders from "../../di/coreproviders";


export default class ExhibitionDetailViewModel extends ViewModel<ExhibitionDetailState>{
	
	private repository = CoreProviders.provideExhibitionRepository()

	public async onInit(): Promise<void> {
		await super.onInit();
		this.state.exhibiton = await this.repository.getByPrimaryKey(this.state.exhibitionID);	
	} 

}