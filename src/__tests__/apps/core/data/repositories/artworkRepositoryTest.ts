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
			new Date(Date.now())
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
			["gs://sdjfkljasdlfkjadslkfj;alsds"]
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
