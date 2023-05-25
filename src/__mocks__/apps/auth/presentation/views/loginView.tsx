import LoginState from "@/apps/auth/application/states/loginState";
import LoginViewModel from "@/apps/auth/application/viewmodels/loginViewModel";
import TextFieldComponent from "@/lib/components/form/TextFieldComponent";
import { AsyncStatus } from "@/lib/state/asyncState";
import React, { FormEvent } from "react";
import { Navigate } from "react-router-dom";



export default class LoginView extends React.Component<any, LoginState>{

	private viewModel: LoginViewModel;

	constructor(props: any){
		super(props);
		this.state = new LoginState();
		this.viewModel = new LoginViewModel(this.state, this.setState.bind(this))
	}

	private handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		this.viewModel.signInWithPG();
	}

	render(): React.ReactNode {
		if(this.state.status === AsyncStatus.done){
			return (<Navigate to="/home" />)
		}
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					{this.state.status}
					
					{(this.state.error?.message)}
					Email: <TextFieldComponent field={this.state.form.email} syncer={this.viewModel.syncState}/>
					Password: <TextFieldComponent field={this.state.form.password} syncer={this.viewModel.syncState}/>
					<button>Submit</button>
				</form>
				

			</div>
		)

	}



}