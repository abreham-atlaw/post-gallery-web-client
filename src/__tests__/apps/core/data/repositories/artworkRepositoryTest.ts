import Authenticator from "@/apps/auth/data/repositories/authenticator";
import AuthProviders from "@/apps/auth/di/authProviders";
import Artist from "@/apps/core/data/models/artist";
import Artwork, { Status } from "@/apps/core/data/models/artwork";
import { Gender } from "@/apps/core/data/models/gender";
import CoreProviders from "@/apps/core/di/coreproviders";


class ArtworkRepositoryTest{

	private authenticator: Authenticator = AuthProviders.provideAuthenticator(); 
	private adminEmail: string = "abreham.atlaw@yahoo.com"
	private adminPassword: string = "temppasswd"
	private artworkRepository = CoreProviders.provideArtworkRepository();
	private artistRepository = CoreProviders.provideArtistRepository();

	private INITIAL_ARTISTS = [
		new Artist(
			"Ar00001",
			"Jermaine Cole",
			Gender.male,
			"+251911223344",
			"jcole@dreamville.com",
			"Ethiopian",
			"The quick brown fox jumps over the lazy dog.",
			new Date(Date.now()),
			"https://firebasestorage.googleapis.com/v0/b/post-gallery-a8462.appspot.com/o/b04.jpg?alt=media&token=3dfe12ca-5298-45f0-ba5e-f814e7e3facd&_gl=1*fiz62q*_ga*NjY3NDQzOTg2LjE2ODUwOTk5NTU.*_ga_CW55HF8NVT*MTY4NTk1MjQ3Mi44LjEuMTY4NTk1MjU4Ni4wLjAuMA.."
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
			"paper",
			[
				"https://firebasestorage.googleapis.com/v0/b/post-gallery-a8462.appspot.com/o/01.webp?alt=media&token=058ccb8d-ac65-427f-8147-36593d3fe2de&_gl=1*1kvb6ex*_ga*NjY3NDQzOTg2LjE2ODUwOTk5NTU.*_ga_CW55HF8NVT*MTY4NTgxMDY3Ny42LjEuMTY4NTgxMTA3Mi4wLjAuMA..",
				"https://firebasestorage.googleapis.com/v0/b/post-gallery-a8462.appspot.com/o/2.jpg?alt=media&token=030bfbc8-e8b1-4384-915f-b87320bf3c35&_gl=1*ybbu21*_ga*NjY3NDQzOTg2LjE2ODUwOTk5NTU.*_ga_CW55HF8NVT*MTY4NTgxMDY3Ny42LjEuMTY4NTgxMTE3My4wLjAuMA..",
				"https://firebasestorage.googleapis.com/v0/b/post-gallery-a8462.appspot.com/o/3.jpg?alt=media&token=98713d61-1351-40d5-9393-51dd3252d282&_gl=1*rfukq3*_ga*NjY3NDQzOTg2LjE2ODUwOTk5NTU.*_ga_CW55HF8NVT*MTY4NTgxMDY3Ny42LjEuMTY4NTgxMTE4My4wLjAuMA..",
				"https://firebasestorage.googleapis.com/v0/b/post-gallery-a8462.appspot.com/o/4.jpg?alt=media&token=546f926f-77ac-4fad-b64e-e02db8eaa216&_gl=1*1h4cwdq*_ga*NjY3NDQzOTg2LjE2ODUwOTk5NTU.*_ga_CW55HF8NVT*MTY4NTgxMDY3Ny42LjEuMTY4NTgxMTE5My4wLjAuMA.."
			]
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
			artwork.artist = this.INITIAL_ARTISTS[0]
		}
		
	}

	public tearDown = async() => {
		
	}

	public testGetAll = async () => {
		this.artworkRepository.getAll()
		.then((artworks: Artwork[]) => {
			expect(artworks.length).toBeGreaterThanOrEqual(1)
			expect(artworks.map((a) => a.id)).toContain(this.INITIAL_ARTWORKS[0].id)
		})
	}
		

	public testGetByArtist = async () => {
		let artworks = await this.artworkRepository.getByArtist(this.INITIAL_ARTISTS[0]);
		expect(artworks).toHaveLength(1)
		expect(artworks[0].id).toBe(this.INITIAL_ARTWORKS[0].id)
	}

	public testGetByPrimaryKey = async () => {
		let artwork = await this.artworkRepository.getByPrimaryKey(this.INITIAL_ARTWORKS[0].getPK()!);
		expect(artwork).toBeInstanceOf(Artwork)
		expect(artwork.id).toBe(this.INITIAL_ARTWORKS[0].getPK()!)
	}

	public testForegnKeyAttachment = async () => {
		let artwork = await this.artworkRepository.getByPrimaryKey(this.INITIAL_ARTWORKS[0].id!)
		expect(artwork.artist?.id).toBe(this.INITIAL_ARTISTS[0].id)
		expect(artwork.artist?.artworks).toBe(this.INITIAL_ARTWORKS);
	}

	main(){
		beforeEach(this.setup)
		test("Get By Primary Key", this.testGetByPrimaryKey)
		test("Get All", this.testGetAll)
		test("Get By Artist", this.testGetByArtist)
		test("Foregn Key Attachment", this.testForegnKeyAttachment)
	}

}


CoreProviders.provideFirebaseApp()
const testCase = new ArtworkRepositoryTest();
testCase.main()
