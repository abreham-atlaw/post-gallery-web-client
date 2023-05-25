import { FIREBASE_CONFIG } from "@/firebase-config";
import { FirebaseApp, initializeApp } from "firebase/app"
import { Firestore, getFirestore } from "firebase/firestore";



export default class CoreProviders{

	private static app?: FirebaseApp;

	public static provideFirebaseApp(): FirebaseApp{
		if(CoreProviders.app === undefined){
			CoreProviders.app = initializeApp(FIREBASE_CONFIG);
		}
		return CoreProviders.app!;
	}

	public static provideFirestoreDB(): Firestore{
		return getFirestore();
	}


}