import { FIREBASE_CONFIG } from "@/firebase-config";
import { FirebaseApp, initializeApp } from "firebase/app"



export default class CoreProviders{

	private static app?: FirebaseApp;

	public static provideFirebaseApp(){
		if(CoreProviders.app === undefined){
			CoreProviders.app = initializeApp(FIREBASE_CONFIG);
		}
		return CoreProviders.app!;
	}

}