import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import WriteArtistState from "../states/writeArtistState";
import ArtistRepository from "@/apps/core/data/repositories/artistRepository";
import CoreProviders from "@/apps/core/di/coreproviders";
import Artist from "@/apps/core/data/models/artist";
import ArtistForm from "../forms/artistForm";


export default class EditArtistViewModel extends AsyncViewModel<WriteArtistState>{

	private repository: ArtistRepository = CoreProviders.provideArtistRepository()

	private syncArtistToForm(form: ArtistForm, artist: Artist){
		form.fullName.setValue(artist.fullName)
		form.email.setValue(artist.email)
		form.biography.setValue(artist.biography)
		form.dateOfBirth.setValue(artist.dateOfBirth)
		form.gender.setValue(artist.gender)
		form.nationality.setValue(artist.nationality)
		form.phoneNumber.setValue(artist.phoneNumber)
		form.avatar.setValue(artist.avatar)
	}

	protected syncFormToArtist(form: ArtistForm){
		let artist = this.state.artist!;
		artist.fullName = form.fullName.getValue()!
		artist.email = form.email.getValue()!
		artist.biography = form.biography.getValue()!
		artist.dateOfBirth = form.dateOfBirth.getValue()!
		artist.gender = form.gender.getValue()!
		artist.nationality = form.nationality.getValue()!
		artist.phoneNumber = form.phoneNumber.getValue()!
		artist.avatar = form.avatar.getValue()!
	}

	async init(artistID: string){
		this.asyncCall(async () => {
			this.state.artist = await this.repository.getByPrimaryKey(artistID)
			this.syncArtistToForm(this.state.form, this.state.artist)
			this.syncState()
		})
	}

	async save(){

		this.asyncCall(async () => {
			await this.state.form.validate(true)
			this.syncFormToArtist(this.state.form)
			await this.repository.save(this.state.artist!)
		})


	}

}