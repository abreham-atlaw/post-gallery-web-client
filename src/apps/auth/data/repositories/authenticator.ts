import { GoogleAuthProvider, User, applyActionCode, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import AuthProviders from "../../di/authProviders";



export enum AuthenticationStatus{

	none,
	verification,
	authenticated

}



export default class Authenticator{

	public async createWithEmail(email: string, password: string): Promise<User>{
		let user: User = (await createUserWithEmailAndPassword(await AuthProviders.provideAuth(), email, password)).user;
		return user;
	}

	public async sendVerificationEmail(){
		await sendEmailVerification((await this.getCurrentUser())!);
	}

	public async verifyEmail(code: string){
		await applyActionCode(await AuthProviders.provideAuth(), code);
	}

	public async signInWithEmail(email: string, password: string): Promise<User>{
		return (await signInWithEmailAndPassword(await AuthProviders.provideAuth(), email, password)).user;
	}

	public async getWithGoogle(): Promise<User>{
		let provider = new GoogleAuthProvider();
		return (await signInWithPopup(await AuthProviders.provideAuth(), provider)).user;
	}

	public async getWithApple(): Promise<User>{
		throw Error("Unimplemented");
	}

	public async getAuthenticationStatus(): Promise<AuthenticationStatus>{
		let user = (await AuthProviders.provideAuth()).currentUser
		if(user === null){
			return AuthenticationStatus.none
		}
		if(!user.emailVerified){
			return AuthenticationStatus.verification
		}
		return AuthenticationStatus.authenticated
	}

	public async getCurrentUser(): Promise<User|null>{
		return (await AuthProviders.provideAuth()).currentUser
	}

	public async logout(): Promise<void>{
		await signOut((await AuthProviders.provideAuth()))	
	}


}