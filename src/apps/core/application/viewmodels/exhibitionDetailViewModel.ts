import ViewModel from "@/lib/viewmodel/viewmodel";
import ExhibitionDetailState from "../state/exhibitionDetailState";
import CoreProviders from "../../di/coreproviders";


export default class ExhibitionDetailViewModel extends ViewModel<ExhibitionDetailState>{
	
	private repository = CoreProviders.provideExhibitionRepository()

	public async onInit(): Promise<void> {
		this.state.exhibiton = await this.repository.getByPrimaryKey(this.state.exhibitionID);	
		await super.onInit();
	} 
	protected isReady(): boolean {
		let value = (this.state.exhibiton != undefined && 
			this.state.exhibiton!.artist != undefined &&
			this.state.exhibiton.artworks != undefined &&
			!(this.state.exhibiton.artworks.map((artwork) => artwork.artist).includes(undefined))
		);
		return value;
	}



}