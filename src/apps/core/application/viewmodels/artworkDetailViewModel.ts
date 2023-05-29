import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import ArtworkDetailState from "../state/artworkDetailState";
import ArtworkRepository from "../../data/repositories/artworkRepository";
import CoreProviders from "../../di/coreproviders";



export default class ArtworkDetailViewModel extends AsyncViewModel<ArtworkDetailState>{

	private artworkRepository: ArtworkRepository = CoreProviders.provideArtworkRepository()

	public async initialize(artworkID: string){
		this.asyncCall(
			async () => {
				this.state.artwork = await this.artworkRepository.getByPrimaryKey(artworkID)
			}
		)
	}

}