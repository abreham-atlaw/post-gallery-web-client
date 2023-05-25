import React from "react";
import { Route, Routes } from "react-router";
import ClientSignupView from "./__mocks__/apps/auth/presentation/views/clientSignupView";
import { AuthenticationStatus } from "./apps/auth/data/repositories/authenticator";
import { EmailVerificationView } from "./__mocks__/apps/auth/presentation/views/emailVerificationView";
import AuthenticatedComponent from "./apps/auth/presentation/components/AuthenticatedComponent";
import LoginView from "./__mocks__/apps/auth/presentation/views/loginView";


export default class PGRouter extends React.Component{

	render(): React.ReactNode {

		return (
			<Routes>
				<Route path="/auth/signup/" element={<ClientSignupView />}/>
				<Route path="/auth/login/" element={<LoginView />}/>
				
				<Route path="/auth/email-verify/" element={
					<AuthenticatedComponent validStatus={[AuthenticationStatus.verification]} redirectionMap={new Map<AuthenticationStatus, string>([
						[AuthenticationStatus.none, "/auth/login"],
						[AuthenticationStatus.authenticated, "/home"]
					])}>
						<EmailVerificationView />
					</AuthenticatedComponent>
				}/>

				<Route path="/home" element={
					<AuthenticatedComponent validStatus={[AuthenticationStatus.authenticated]}>
					{/*
					<Home>
					*/}
					</AuthenticatedComponent>
				}/>

				
			</Routes>
		)
	}

}