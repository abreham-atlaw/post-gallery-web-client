import AsyncViewModel from "@/lib/viewmodel/asyncViewModel"
import LoginState from "../states/loginState";
import LoginForm from "../forms/loginForm";
import AuthProviders from "../../di/authProviders";
import { PGSigninRequest } from "../../data/models/signInRequests";



export default class LoginViewModel extends AsyncViewModel<LoginState>{

	private repository = AuthProviders.provideClientRepository();
	public form: LoginForm = new LoginForm();


	public async signInWithPG(){
		await this.form.validate(true)
		this.asyncCall(
			async (state: LoginState) => {
				await this.repository.signInWithPG(new PGSigninRequest(
					state.form.email.getValue()!,
					state.form.password.getValue()!
				))
			}
		)
	}

}