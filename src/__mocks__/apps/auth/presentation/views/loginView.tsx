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
			<div className="bg-[url('./assets/LoginRegisterBG.png')] bg-center bg-cover h-screen w-screen text-white px-6 pt-6">
				<p className="text-6xl font-semibold">PG</p>
				<p className="text-6xl font-medium mt-8">WELCOME</p>
				<p className="text-3xl font-normal leading-6 ">TO POST GALLERY</p>
				<p className="text-xl font-light">Login to your post gallery account</p>
				<p className="text-4xl font-regular py-2.5">Sign In</p>
				<form onSubmit={this.handleSubmit}>
					
					
					{(this.state.error?.message)}
					<p className="text-xl">Email:</p> <TextFieldComponent field={this.state.form.email} syncer={this.viewModel.syncState}/>
					<div className="h-4"></div>
					<p className="text-xl">Password:</p> <TextFieldComponent field={this.state.form.password} syncer={this.viewModel.syncState}/>
					<p className="text-lg font-normal pt-2.5">Show password</p>
					<div className="flex flex-row justify-center text-center pt-2.5">
						<p className="text-lg font-normal text-[#E1E1E1]">Doesn’t have an account? </p>
						<p className="text-lg font-medium">Create Account</p>
					</div>
					<div className="flex flex-row justify-center items-center w-56 m-auto mt-36 pt-2 pb-2.5 bg-white text-black rounded-full">
						<button className="justify-center text-2xl">Continue</button>
					</div>
				</form>
				

			</div>
		)

	}



}