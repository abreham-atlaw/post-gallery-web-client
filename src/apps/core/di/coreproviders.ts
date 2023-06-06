import { FIREBASE_CONFIG } from "@/firebase-config";
import { FirebaseApp, initializeApp } from "firebase/app"
import { Firestore, getFirestore } from "firebase/firestore";
import ArtistRepository from "../data/repositories/artistRepository";
import ArtworkRepository from "../data/repositories/artworkRepository";
import FileStorage from "@/lib/filestorage/fileStorage";
import FirebaseFileStorage from "@/lib/filestorage/firebaseFileStorage";
import { getStorage } from "firebase/storage";



export default class CoreProviders{

	private static app?: FirebaseApp;
	private static artistRepository?: ArtistRepository;
	private static artWorkRepository?: ArtworkRepository;

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

	public static provideDefaultFileStorage(): FileStorage{
		return new FirebaseFileStorage(getStorage())
	}

}