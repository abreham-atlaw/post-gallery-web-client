import { FIREBASE_CONFIG } from "@/firebase-config";
import { FirebaseApp, initializeApp } from "firebase/app"
import { Firestore, getFirestore } from "firebase/firestore";
import ArtistRepository from "../data/repositories/artistRepository";
import ArtworkRepository from "../data/repositories/artworkRepository";
import FileStorage from "@/lib/filestorage/fileStorage";
import FirebaseFileStorage from "@/lib/filestorage/firebaseFileStorage";
import { getStorage } from "firebase/storage";
import ContextInjector from "@/lib/viewmodel/contextInjector";
import ClientInjector from "@/apps/auth/application/injectors/clientInjector";
import ExhibitionRepository from "../data/repositories/exhibitionRepository";



export default class CoreProviders{

	private static app?: FirebaseApp;
	private static artistRepository?: ArtistRepository;
	private static artWorkRepository?: ArtworkRepository;
	private static exhibitionRepository?: ExhibitionRepository;

	public static provideFirebaseApp(): FirebaseApp{
		if(CoreProviders.app === undefined){
			CoreProviders.app = initializeApp(FIREBASE_CONFIG);
		}
		return CoreProviders.app!;
	}

	public static provideFirestoreDB(): Firestore{
		return getFirestore();
	}

	public static provideArtistRepository(): ArtistRepository{
		if(this.artistRepository === undefined){
			this.artistRepository = new ArtistRepository();
		}
		return this.artistRepository;
	}

	public static provideArtworkRepository(): ArtworkRepository{
		if(this.artWorkRepository === undefined){
			this.artWorkRepository = new ArtworkRepository();
		}
		return this.artWorkRepository;
	}

	public static provideExhibitionRepository(): ExhibitionRepository{
		if(this.exhibitionRepository === undefined){
			this.exhibitionRepository = new ExhibitionRepository();
		}
		return this.exhibitionRepository;
	}

	public static provideDefaultFileStorage(): FileStorage{
		return new FirebaseFileStorage(getStorage())
	}

	public static provideDefaultInjectors(): ContextInjector[]{
		return [
			new ClientInjector()
		]
	}

}