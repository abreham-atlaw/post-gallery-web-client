import Authenticator from "@/apps/auth/data/repositories/authenticator";
import AuthProviders from "@/apps/auth/di/authProviders";
import Artist from "@/apps/core/data/models/artist";
import Artwork, { Status } from "@/apps/core/data/models/artwork";
import { Gender } from "@/apps/core/data/models/gender";
import CoreProviders from "@/apps/core/di/coreproviders";



class ArtistRepositoryTest{

	private authenticator: Authenticator = AuthProviders.provideAuthenticator(); 
	private adminEmail: string = "abreham.atlaw@yahoo.com"
	private adminPassword: string = "temppasswd"
	private artworkRepository = CoreProviders.provideArtworkRepository();
	private artistRepository = CoreProviders.provideArtistRepository();

	private INITIAL_ARTISTS = [
		new Artist(
			"Ar00001",
			"Jermaine Cole",
			35,
			Gender.male,
			"+251911223344",
			"jcole@dreamville.com",
			"Ethiopian"
		)
	]

	private INITIAL_ARTWORKS = [
		new Artwork(
			"Pg00001",
			this.INITIAL_ARTISTS[0].id!,
			"KOD",
			"The quick brown fox jumps over the lazy dog.",
			10000,
			{
				width: 10,
				height: 10,
				depth: 2
			},
			Status.onSale,
			new Date(Date.now()),
			"paper"
		)
	]


	public setup = async() => {
		CoreProviders.provideFirebaseApp();
		this.authenticator.signInWithEmail(this.adminEmail, this.adminPassword);
		
		for(let artist of this.INITIAL_ARTISTS){
			await this.artistRepository.save(artist)
		}
		for(let artwork of this.INITIAL_ARTWORKS){
			await this.artworkRepository.save(artwork)
		}
		
	}

	public testGetByArtist(){
		
	}

}