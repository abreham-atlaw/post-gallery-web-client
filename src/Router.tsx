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
import HomeView from "./__mocks__/apps/core/presentation/views/HomeView";
import LogoutView from "./__mocks__/apps/auth/presentation/views/logoutView";
import CheckOutView, { RoutedCheckoutView } from "./__mocks__/apps/core/presentation/views/CheckoutView";
import { RoutedPaymentView } from "./__mocks__/apps/core/presentation/views/PaymentView";


export default class PGRouter extends React.Component{

	render(): React.ReactNode {

		return (
			<Routes>
				<Route path="/" element={<HomeView />} />
				<Route path="/auth/signup/" element={<ClientSignupView />}/>
				<Route path="/auth/login/" element={<LoginView />}/>
				<Route path="/auth/logout/" element={<LogoutView />}/>
				<Route path="/auth/email-verify/" element={
					<AuthenticatedComponent validStatus={[AuthenticationStatus.verification]} redirectionMap={new Map<AuthenticationStatus, string>([
						[AuthenticationStatus.none, "/auth/login"],
						[AuthenticationStatus.authenticated, "/"]
					])}>


						<EmailVerificationView />
					
					
					</AuthenticatedComponent>
				}/>

				<Route path="/artwork/:id" element={<RoutedArtworkDetailView/>}/>
				<Route path="/cart" element={<CartView />}/>
				<Route path="/exhibitions" element={<ExhibitionListView />}/>
				<Route path="/exhibition/:id" element={<RoutedExhibitionDetailView />}/>
				

				<Route path="/search" element={
					<AuthenticatedComponent>
						<SearchView/>
					</AuthenticatedComponent>
				}/>

				<Route path="/checkout/:artworkId" element={
					<AuthenticatedComponent>
						<RoutedCheckoutView />
					</AuthenticatedComponent>
				}/>

				<Route path="/complete-payment/:orderId" element={
					<AuthenticatedComponent>
						<RoutedPaymentView/>
					</AuthenticatedComponent>
				}/>

				<Route path="/admin/artist/add" element={<AddArtistView/>} />
				<Route path="/admin/artwork/add" element={<AddArtworkView/>} />
				<Route path="/admin/exhibition/add" element={<AddExhibitionView/>} />

			</Routes>
		)
	}

}