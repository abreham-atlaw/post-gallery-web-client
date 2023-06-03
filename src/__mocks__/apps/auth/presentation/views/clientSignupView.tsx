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
        this.state.form.fullName.setValue("Enter FullName")
		this.state.form.email.setValue("Enter Email")
		this.state.form.phoneNumber.setValue("Enter Phone Number")
		this.state.form.password.setValue("Enter Password")
		
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
			<div className="bg-[url('./assets/LoginBG.png')] bg-center bg-cover min-h-screen w-screen text-white">
				<div className="lg:hidden">
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
				

				{/* --------------------------- */}

				<div className="hidden lg:flex lg:flex-row ">

					{/* Left */}
					<div className="w-6/12 min-h-screen flex items-center justify-center bg-[url('./assets/LGBG.png')] bg-center bg-cover ">
						<div className="w-3/4 xl:max-w-lg  my-20 p-9 bg-[url('./assets/LGRegisterBG.png')] bg-cover bg-no-repeat bg-center rounded-2xl ">	
							<p className="text-6xl pb-2 font-semibold w-5/12 border-b-2 border-white">PG</p>	
							<p className="mt-12 text-4xl font-medium">Step into a world of imagination and inspiration, where every stroke of the brush and every splash of color tells a story - come and experience the breathtaking beauty of creativity at our art gallery</p>
							
							<div className="mx-auto flex flex-row justify-center items-center h-20 w-fit px-12 mt-12 bg-black rounded-full">
								<img className="h-12 pr-3.5 bg-contain" src={Google} />		
								<button className="font-medium text-3xl text-center" onClick={this.handleSignupGoogle}>Continue with Google</button>
							</div>

							<div className="mx-auto flex flex-row justify-center items-center h-20 w-fit px-12 mt-5 bg-white rounded-full">
								<img className="h-12 pr-3.5 bg-contain" src={Apple} />		
								<button className="font-medium text-3xl text-center text-black" onClick={this.handleSignupGoogle}>Continue with Apple</button>
							</div>

							<div className="flex flex-row items-center justify-center my-3 " >
								<LineWithWidth10 />
								<p className="font-medium text-2xl px-3">Or</p>
								<LineWithWidth10 />
							</div>
		
							<div className="mx-auto flex flex-row justify-center items-center h-20 w-fit px-12 mt-2 bg-white rounded-full">
								<img className="h-12 pr-3.5 bg-contain" src={PGLogin} />		
								<button className="font-medium text-3xl text-center text-black" onClick={this.handleSignupGoogle}>PostGallary Account</button>
							</div>

						</div>
					</div>

					{/* Right */}

					<div className="w-6/12 min-h-screen py-9 px-16 flex flex-col items-center justify-center bg-white text-black">
						<p className="text-8xl font-semibold ">WELCOME</p>
						<p className="text-6xl font-medium ">TO POST GALLERY</p>
						<p className="text-4xl">Create your post gallery account</p>
						<p className="text-6xl mt-2 mb-4">SignUp</p>
						<form className="w-full" onSubmit={this.handleSignUpPG}>
							{this.state.error?.message}
							<p className="text-xl mt-2.5">Full name:</p> <TextFieldComponent field={this.state.form.fullName} syncer={this.viewModel.syncState}/>
							<p className="text-xl mt-2.5">Email:</p> <TextFieldComponent field={this.state.form.email} syncer={this.viewModel.syncState}/>
							<p className="text-xl mt-2.5">Phone Number:</p> <TextFieldComponent field={this.state.form.phoneNumber} syncer={this.viewModel.syncState}/>
							<p className="text-xl mt-2.5">Password:</p> <TextFieldComponent field={this.state.form.password} syncer={this.viewModel.syncState}/>
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