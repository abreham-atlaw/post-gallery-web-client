import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import WriteExhibitionState from "../states/writeExhibitionState";
import CoreProviders from "@/apps/core/di/coreproviders";
import Exhibition from "@/apps/core/data/models/exhibition";
import ExhibitionForm from "../forms/exhibitionForm";
import { existsSync } from "fs";


export default class EditExhibitionViewModel extends AsyncViewModel<WriteExhibitionState>{

	private repository = CoreProviders.provideExhibitionRepository();
	private artistRepository = CoreProviders.provideArtistRepository();
	private artworkRepository = CoreProviders.provideArtworkRepository();

	private syncExhibitionToForm(form: ExhibitionForm, exhibition: Exhibition) {
		form.artistId.setValue(exhibition.artistId)
		form.name.setValue(exhibition.name)
		form.description.setValue(exhibition.description)
		form.curator.setValue(exhibition.curator)
		form.venue.setValue(exhibition.venue)
		form.startDate.setValue(exhibition.dateRange.startDate)
		form.endDate.setValue(exhibition.dateRange.endDate)
		form.startTime.setValue(exhibition.timeFrame.startTime)
		form.endTime.setValue(exhibition.timeFrame.endTime)
		form.coverImage.setValue(exhibition.coverImage)
		form.artworkIds.setValue(exhibition.artworkIds)
	}
	
	protected syncFormToExhibition(form: ExhibitionForm) {
		const exhibition = this.state.exhibition!;
		exhibition.artistId = form.artistId.getValue()!;
		exhibition.name = form.name.getValue()!;
		exhibition.description = form.description.getValue()!;
		exhibition.curator = form.curator.getValue()!;
		exhibition.venue = form.venue.getValue()!;
		exhibition.dateRange = {
		  startDate: form.startDate.getValue()!,
		  endDate: form.endDate.getValue()!,
		};
		exhibition.timeFrame = {
		  startTime: form.startTime.getValue()!,
		  endTime: form.endTime.getValue()!,
		};
		exhibition.coverImage = form.coverImage.getValue()!
		exhibition.artworkIds = form.artworkIds.getValue()! as string[]
	}

	// async init(artworkID: string){
	// 	this.asyncCall(async () => {
	// 		this.state.artwork = await this.repository.getByPrimaryKey(artworkID)
	// 		this.syncArtworkToForm(this.state.form, this.state.artwork)
	// 		this.syncState()
	// 	})
	// }

	// async save(){

	// 	await this.asyncCall(async () => {
	// 		await this.state.form.validate(true)
	// 		this.syncFormToArtwork(this.state.form)
	// 		await this.repository.save(this.state.artwork!)
	// 	})


	// }
	async init(exhibitionId: string){
		this.asyncCall(async () => {
			this.state.exhibition = await this.repository.getByPrimaryKey(exhibitionId);
			this.syncExhibitionToForm(this.state.form, this.state.exhibition)
			this.syncState()
		})
	}

	public async onInit(): Promise<void> {
		await super.onInit();
		this.state.allArtists = await this.artistRepository.getAll();
		this.state.allArtworks = await this.artworkRepository.getAll();
	}

	async save(){
		await this.asyncCall(async () => {
			await this.state.form.validate(true);
			this.syncFormToExhibition(this.state.form)
			await this.repository.save(this.state.exhibition!)
		})
	}

	


}