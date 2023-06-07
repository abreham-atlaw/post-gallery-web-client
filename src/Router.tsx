import React from "react";
import { Route, Routes } from "react-router";
import ClientSignupView from "./__mocks__/apps/auth/presentation/views/clientSignupView";
import { AuthenticationStatus } from "./apps/auth/data/repositories/authenticator";
import { EmailVerificationView } from "./__mocks__/apps/auth/presentation/views/emailVerificationView";
import AuthenticatedComponent from "./apps/auth/presentation/components/AuthenticatedComponent";
import LoginView from "./__mocks__/apps/auth/presentation/views/loginView";
import SearchView from "./__mocks__/apps/core/presentation/views/SearchView";
import { RoutedArtworkDetailView } from "./__mocks__/apps/core/presentation/views/ArtworkDetailView";
import AddArtistView from "./__mocks__/apps/admin/presentation/views/AddArtistView";
import AddArtworkView from "./__mocks__/apps/admin/presentation/views/AddArtworkView";
import CartView from "./__mocks__/apps/core/presentation/views/CartViewNew";
import AddExhibitionView from "./__mocks__/apps/admin/presentation/views/AddExhibitionView";
import ExhibitionListView from "./__mocks__/apps/core/presentation/views/ExhibitionListView";
import ExhibitionDetailView, { RoutedExhibitionDetailView } from "./__mocks__/apps/core/presentation/views/ExhibitionDetailView";


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

				

				

				<Route path="/search" element={<SearchView />}/>
				<Route path="/artwork/:id" element={<RoutedArtworkDetailView/>}/>
				<Route path="/cart" element={<CartView />}/>
				<Route path="/exhibitions" element={<ExhibitionListView />}/>
				<Route path="/exhibition/:id" element={<RoutedExhibitionDetailView />}/>


				<Route path="/home" element={
					
					
					<AuthenticatedComponent validStatus={[AuthenticationStatus.authenticated]}>
					
					{/*
					<Home>
					*/}
					</AuthenticatedComponent>
				}/>

				

				<Route path="/admin/artist/add" element={<AddArtistView/>} />
				<Route path="/admin/artwork/add" element={<AddArtworkView/>} />
				<Route path="/admin/exhibition/add" element={<AddExhibitionView/>} />

			</Routes>
		)
	}

}