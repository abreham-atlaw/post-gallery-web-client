import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import WriteExhibitionState from "../states/writeExhibitionState";
import CoreProviders from "@/apps/core/di/coreproviders";
import Exhibition from "@/apps/core/data/models/exhibition";
import ExhibitionForm from "../forms/exhibitionForm";


export default class EditExhibitionViewModel extends AsyncViewModel<WriteExhibitionState>{

	private repository = CoreProviders.provideExhibitionRepository();

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

	async save(){
		await this.asyncCall(async () => {
			await this.state.form.validate(true);
			this.syncFormToExhibition(this.state.form)
			await this.repository.save(this.state.exhibition!)
		})
	}

	


}