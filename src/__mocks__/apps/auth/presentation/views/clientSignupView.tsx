import SignupState from "@/apps/auth/application/states/signupState";
import SignUpViewModel from "@/apps/auth/application/viewmodels/signupViewModel";
import TextFieldComponent from "@/lib/components/form/TextFieldComponent";
import { AsyncStatus } from "@/lib/state/asyncState";
import React, { FormEvent } from "react";
import { Navigate } from "react-router-dom";


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
			<div>
				<form onSubmit={this.handleSignUpPG}>
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

				<button onClick={this.handleSignupGoogle}> Sign Up with Google</button>
			</div>
		)
	}



}