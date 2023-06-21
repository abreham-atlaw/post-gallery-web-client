import SignupState from "@/apps/auth/application/states/signupState";
import SignUpViewModel from "@/apps/auth/application/viewmodels/signupViewModel";
import TextFieldComponent from "@/lib/components/form/TextFieldComponent";
import { AsyncStatus } from "@/lib/state/asyncState";
import React, { FormEvent } from "react";
import { Navigate } from "react-router-dom";
import Google from '@/assets/Google.png'
import Apple from '@/assets/Apple.png'
import PGLogin from '@/assets/PGLogin.png'
import StatusToast from "@/lib/components/status/StatusToast";


export default class ClientSignupView extends React.Component<any, SignupState>{

	private viewModel: SignUpViewModel;

	constructor(props: any){
		super(props);
		this.state = new SignupState();
		this.viewModel = new SignUpViewModel(this.state, this.setState.bind(this));
		
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
					<a href="/" className="text-6xl font-semibold p-6">PG</a>
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
							
							<StatusToast asyncState={this.state} errorText={`Error: ${this.state.error?.message??""}`}/>
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
						<div className="w-4/6 xl:max-w-lg px-9 py-6 bg-[url('./assets/LGRegisterBG.png')] bg-cover bg-no-repeat bg-center rounded-2xl ">	
							<a href="/" className="text-6xl pb-2 font-semibold w-5/12 border-b-2 border-white">PG</a>	
							<p className="mt-4 text-2xl font-medium leading-[28px]">Step into a world of imagination and inspiration, where every stroke of the brush and every splash of color tells a story - come and experience the breathtaking beauty of creativity at our art gallery</p>
							
							<div className="mx-auto flex flex-row justify-center items-center h-16 w-full mt-8 bg-black rounded-full">
								<img className="h-6 pr-3.5 bg-contain" src={Google} />		
								<button className="font-medium text-2xl text-center" onClick={this.handleSignupGoogle}>Continue with Google</button>
							</div>

							<div className="mx-auto flex flex-row justify-center items-center h-16 w-full mt-3.5 bg-white rounded-full">
								<img className="h-6 pr-3.5 bg-contain" src={Apple} />		
								<button className="font-medium text-2xl text-center text-black" onClick={this.handleSignupGoogle}>Continue with Apple</button>
							</div>

							<div className="flex flex-row items-center justify-center my-3 " >
								<LineWithWidth10 />
								<p className="font-medium text-2xl px-2.5">Or</p>
								<LineWithWidth10 />
							</div>
		
							<div className="mx-auto flex flex-row justify-center items-center h-16 w-full mt-2 bg-white rounded-full">
								<img className="h-6 pr-3.5 bg-contain" src={PGLogin} />		
								<button className="font-medium text-2xl text-center text-black" onClick={this.handleSignupGoogle}>PostGallary Account</button>
							</div>

						</div>
					</div>

					{/* Right */}

					<div className="w-6/12 min-h-screen py-4 px-16 flex flex-col items-start justify-center bg-white text-black">
						<p className="text-6xl font-semibold ">WELCOME</p>
						<p className="text-5xl font-medium ">TO POST GALLERY</p>
						<p className="text-3xl">Create your post gallery account</p>

						<form className="w-full" onSubmit={this.handleSignUpPG}>
							<StatusToast asyncState={this.state} errorText={this.state.error?.message}/>
							<p className="text-xl mt-1.5">Full name:</p> <TextFieldComponent field={this.state.form.fullName} syncer={this.viewModel.syncState}/>
							<p className="text-xl mt-1.5">Email:</p> <TextFieldComponent field={this.state.form.email} syncer={this.viewModel.syncState}/>
							<p className="text-xl mt-1.5">Phone Number:</p> <TextFieldComponent field={this.state.form.phoneNumber} syncer={this.viewModel.syncState}/>
							<p className="text-xl mt-1.5">Password:</p> <TextFieldComponent field={this.state.form.password} syncer={this.viewModel.syncState}/>
							<div className="flex justify-center items-center w-64 m-auto mt-5 h-14 bg-black text-white rounded-full">
								<button className="justify-center text-2xl">Continue</button>
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