import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import ArtworkRepository from "../../data/repositories/artworkRepository";
import CoreProviders from "../../di/coreproviders";
import SearchState from "../state/searchState";




export default class SearchViewModel extends AsyncViewModel<SearchState>{

	private repository: ArtworkRepository = CoreProviders.provideArtworkRepository();

	public searchId(){
		this.asyncCall(
			async () => {
				if(!(await this.state.idField.isValid())){
					return;
				}
				this.state.result = await this.repository.getByPrimaryKey(this.state.idField.getValue()!);
			}
		)
	}



}