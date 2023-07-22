import ViewModel from "@/lib/viewmodel/viewmodel";
import ExhibitionListState from "../state/exhibitionListState";
import CoreProviders from "../../di/coreproviders";
import Exhibition from "../../data/models/exhibition";


export default class ExhibitionListViewModel extends ViewModel<ExhibitionListState>{

	private repository = CoreProviders.provideExhibitionRepository();


	public async onInit(): Promise<void> {
		this.repository.setAttachMode(false);
		this.state.allExhibitions = await this.repository.getAll()
		this.repository.setAttachMode(true);
		this.updateExhibitions();
		for(let exhibition of this.state.currentExhibitions!){
			this.repository.attachForeignKeys(exhibition);
		}
		for(let exhibition of this.state.upcomingExhibitions!){
			this.repository.attachForeignKeys(exhibition);
		}
		await super.onInit();
	}

	private updateExhibitions(){
		this.state.currentExhibitions = this.state.allExhibitions?.filter((exhibition: Exhibition) => exhibition.isActive())
		this.state.upcomingExhibitions = this.state.allExhibitions?.filter((exhibition: Exhibition) => exhibition.isUpcoming())
	}

	protected isReady(): boolean {

		if(this.state.allExhibitions === undefined){
			return false
		}
		for(let exhibition of this.state.currentExhibitions!){
			if(exhibition.artist === undefined){
				return false;
			}
			if(exhibition.artworks === undefined){
				return false
			}
			for(let artwork of exhibition.artworks){
				if(artwork.artist === undefined){
					return false
				}
			}
		}
		for(let exhibition of this.state.upcomingExhibitions!){
			if(exhibition.artist === undefined){
				return false;
			}
			if(exhibition.artworks === undefined){
				return false
			}
			for(let artwork of exhibition.artworks){
				if(artwork.artist === undefined){
					return false
				}
			}
		}

		return true;
	}


}