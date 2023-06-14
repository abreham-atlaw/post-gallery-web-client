import LoginState from "@/apps/auth/application/states/loginState";
import LoginViewModel from "@/apps/auth/application/viewmodels/loginViewModel";
import TextFieldComponent from "@/lib/components/form/TextFieldComponent";
import { AsyncStatus } from "@/lib/state/asyncState";
import React, { FormEvent } from "react";
import { Navigate } from "react-router-dom";
import Google from '@/assets/Google.png'
import PGLogin from '@/assets/PGLogin.png'
import ViewModelView from "@/lib/components/views/ViewModelView";
import BaseState from "@/lib/state/baseState";
import AdminLoginViewModel from "@/apps/auth/application/viewmodels/adminloginViewModel";
import StatusToast from "@/lib/components/status/StatusToast";



export default class AdminLoginView extends ViewModelView<AdminLoginViewModel, any, LoginState>{
	
	onCreateViewModel(state: LoginState): AdminLoginViewModel {
		return new AdminLoginViewModel(state, this.setState.bind(this))
	}
	onCreateState(): LoginState {
		return new LoginState()
	}
	
	private handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		this.getViewModel().signIn()
	} 

	render(): React.ReactNode {
		if(this.state.status === AsyncStatus.done){
			return (<Navigate to="/admin/dashboard" />)
		}
		return (
			<div className="bg-[url('./assets/LoginRegisterBG.png')] bg-center bg-cover min-h-screen w-screen text-white">
				<div className="lg:hidden p-6">
					<p className="text-6xl font-semibold">PG</p>
					<p className="text-6xl font-medium mt-8">WELCOME</p>
					<p className="text-3xl font-normal leading-6 ">TO POST GALLERY</p>
					<p className="text-xl font-light">Login to your post gallery account</p>
					<p className="text-4xl font-regular py-2.5">Sign In</p>
					<form onSubmit={this.handleSubmit}>
						
						
						{(this.state.error?.message)}
						<p className="text-xl">Email:</p> <TextFieldComponent field={this.state.form.email} syncer={this.getViewModel().syncState}/>
						<div className="h-4"></div>
						<p className="text-xl">Password:</p> <TextFieldComponent field={this.state.form.password} syncer={this.getViewModel().syncState}/>
						<p className="text-lg font-normal pt-2.5">Show password</p>
						<div className="flex flex-row justify-center text-center pt-2.5">
							<p className="text-lg font-normal text-[#E1E1E1]">Doesn’t have an account? </p>
							<p className="text-lg font-medium">Create Account</p>
						</div>
						<div className="flex flex-row justify-center items-center w-56 m-auto mb-6 mt-36 pt-2 pb-2.5 bg-white text-black rounded-full">
							<button className="justify-center text-2xl">Continue</button>
						</div>
					</form>
				</div>

				{/* --------------------------- */}

				<div className="hidden lg:flex lg:flex-row ">
					
					{/* Right */}

					<div className="w-6/12 min-h-screen py-9 px-16 flex flex-col items-start justify-center bg-white text-black">
						<p className="text-8xl font-semibold ">WELCOME</p>
						<p className="text-5xl font-medium ">TO POST GALLERY ADMIN</p>
						<p className="text-6xl mt-2 mb-4">SignIn</p>
						<form className="w-full" onSubmit={this.handleSubmit}>
							<StatusToast asyncState={this.state} errorText="Incorrect Username or Password"/>

							<p className="text-xl mt-2.5">Email:</p> <TextFieldComponent field={this.state.form.email} syncer={this.getViewModel().syncState}/>
							<p className="text-xl mt-2.5">Password:</p> <TextFieldComponent field={this.state.form.password} syncer={this.getViewModel().syncState}/>
							<div className="flex justify-center items-center w-56 m-auto mt-9 h-20 pt-2 pb-2.5 bg-black text-white rounded-full">
								<button className="justify-center text-3xl">Continue</button>
							</div>
					</form>
					</div>
				</div>

			</div>
		)

	}



}

const LineWithWidth10 = () => {
	return (
	  <div className="w-full border-b-2 border-white"></div>
	);
  };