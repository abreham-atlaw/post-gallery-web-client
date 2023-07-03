import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import ArtworkDetailState from "../state/artworkDetailState";
import ArtworkRepository from "../../data/repositories/artworkRepository";
import CoreProviders from "../../di/coreproviders";


export default class ArtworkDetailViewModel extends AsyncViewModel<ArtworkDetailState>{

	private artworkRepository: ArtworkRepository = CoreProviders.provideArtworkRepository()

	public async onInit(): Promise<void> {
		this.state.artwork = await this.artworkRepository.getByPrimaryKey(this.state.artworkId)
		await super.onInit();
	}

	protected isReady(): boolean {
		return (this.state.artwork != undefined && 
			this.state.artwork!.artist != undefined);
	}
}