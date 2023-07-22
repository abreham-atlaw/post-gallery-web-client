import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import DashboardState from "../states/dashboardState";
import CoreProviders from "@/apps/core/di/coreproviders";



export default class DashboardViewModel extends AsyncViewModel<DashboardState>{


	private artworkRepository = CoreProviders.provideArtworkRepository();
	private artistRepository = CoreProviders.provideArtistRepository();
	private exhibitionRepository = CoreProviders.provideExhibitionRepository();


	public async onInit(): Promise<void> {
		await super.onInit();
		this.artistRepository.setAttachMode(false);
		this.artworkRepository.setAttachMode(false);
		this.exhibitionRepository.setAttachMode(false);
		this.state.artists = await this.artistRepository.getAll();
		this.state.artworks = await this.artworkRepository.getAll();
		this.state.exhibitions = await this.exhibitionRepository.getAll();
		this.artistRepository.setAttachMode(true);
		this.artworkRepository.setAttachMode(true);
		this.exhibitionRepository.setAttachMode(true);
	}

	// protected isReady(): boolean {
		// return (this.state.artists != undefined) && (this.state.artworks != undefined) && (this.state.exhibitions != undefined);
	// }

}