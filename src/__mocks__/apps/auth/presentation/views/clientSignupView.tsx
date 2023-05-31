import SignupState from "@/apps/auth/application/states/signupState";
import SignUpViewModel from "@/apps/auth/application/viewmodels/signupViewModel";
import TextFieldComponent from "@/lib/components/form/TextFieldComponent";
import { AsyncStatus } from "@/lib/state/asyncState";
import React, { FormEvent } from "react";
import { Navigate } from "react-router-dom";
import Google from '@/assets/Google.png'
import Apple from '@/assets/Apple.png'
import PGLogin from '@/assets/PGLogin.png'


export default class ClientSignupView extends React.Component<any, SignupState>{

	private viewModel: SignUpViewModel;

	constructor(props: any){
		super(props);
		this.state = new SignupState();
		this.viewModel = new SignUpViewModel(this.state, this.setState.bind(this));
		this.state.form.fullName.setValue("Abreham Atlaw")
		this.state.form.email.setValue("abreham.atlaw@yahoo.com")
		this.state.form.phoneNumber.setValue("+251962156364")
		this.state.form.password.setValue("temppasswd")
		
	}

	handleSignUpPG = (event: FormEvent) => {
		event.preventDefault();
		this.viewModel.signUpWithPG();
	}

	handleSignupGoogle = () => {
		this.viewModel.signupWithGoogle();
	}

	getForm = () => {
		return this.viewModel.state.form;
	}

	sync = () => {
		this.viewModel.syncState();
	}




	render(): React.ReactNode {
		if(this.state.status === AsyncStatus.done){
			return (<Navigate to="/auth/email-verify"/>)
		}
		return (
			<div className="bg-[url('./assets/LoginBG.png')] bg-center bg-cover h-screen w-screen text-white">
				<p className="text-6xl font-semibold p-6">PG</p>
				<div className="bg-[url('./assets/WelcomePG.png')] bg-center bg-contain bg-no-repeat h-28 w-56 "></div>
				<div className="pl-6 pr-6">
					<p className="pt-2 font-medium text-2xl leading-7">
					Step into a world of imagination and inspiration, where every stroke of the brush and every splash of color tells a story - come and experience the breathtaking beauty of creativity at our art gallery
					</p>

					<div className="flex flex-row justify-center items-center w-full mt-12 pt-2 pb-2.5 bg-black rounded-full">
						<img className="h-10 pr-3.5 bg-contain" src={Google} />		
						<button className="font-medium text-2xl text-center" onClick={this.handleSignupGoogle}>Continue with Google</button>
					</div>

					<div className="flex flex-row justify-center items-center w-full mt-5 pt-2 pb-2.5 bg-white rounded-full">
						<img className="h-10 pr-3.5 bg-contain" src={Apple} />		
						<button className="font-medium text-2xl text-center text-black" onClick={this.handleSignupGoogle}>Continue with Apple</button>
					</div>

					<div className="flex flex-row justify-center items-center w-full mt-5 pt-2 pb-2.5 bg-white rounded-full">
						<img className="h-10 pr-3.5 bg-contain" src={PGLogin} />		
						<button className="font-medium text-2xl text-center text-black" onClick={this.handleSignupGoogle}>Post Gallary Account</button>
					</div>

				</div>
				<form className="hidden" onSubmit={this.handleSignUpPG}>
						
						Async Status: {this.state.status}
						<br/>
						{this.state.error?.message}
						<br/>
						<br/>
						<TextFieldComponent field={this.state.form.fullName} syncer={this.viewModel.syncState}/>
						<TextFieldComponent field={this.state.form.email} syncer={this.viewModel.syncState}/>
						<TextFieldComponent field={this.state.form.phoneNumber} syncer={this.viewModel.syncState}/>
						<TextFieldComponent field={this.state.form.password} syncer={this.viewModel.syncState}/>
						<button>Submit</button>
					</form>

					<button className="hidden" onClick={this.handleSignupGoogle}> Sign Up with Google</button>
			</div>
		)
	}



}