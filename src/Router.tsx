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
import AddExhibitionView from "./__mocks__/apps/admin/presentation/views/AddExhibitionView";
import ExhibitionListView from "./__mocks__/apps/core/presentation/views/ExhibitionListView";
import ExhibitionDetailView, { RoutedExhibitionDetailView } from "./__mocks__/apps/core/presentation/views/ExhibitionDetailView";
import HomeView from "./__mocks__/apps/core/presentation/views/HomeView";
import LogoutView from "./__mocks__/apps/auth/presentation/views/logoutView";
import CheckOutView, { RoutedCheckoutView } from "./__mocks__/apps/core/presentation/views/CheckoutView";
import { RoutedPaymentView } from "./__mocks__/apps/core/presentation/views/PaymentView";
import OrderListView from "./__mocks__/apps/admin/presentation/views/OrdersListView";
import AdminLoginViewModel from "./apps/auth/application/viewmodels/adminloginViewModel";
import AdminLoginView from "./__mocks__/apps/auth/presentation/views/AdminLoginView";
import { Role } from "./apps/auth/data/models/accounts";
import DashBoardView from "./__mocks__/apps/admin/presentation/views/DashboardView";
import { RoutedArtistEditView } from "./__mocks__/apps/admin/presentation/views/EditArtistView";
import { RoutedEditArtworkView } from "./__mocks__/apps/admin/presentation/views/EditArtworkView";
import { RoutedEditExhibitionView } from "./__mocks__/apps/admin/presentation/views/EditExhibitionView";
import ArtistDetailView, { RoutedArtistDetailView } from "./__mocks__/apps/core/presentation/views/ArtistDetailView";
import ArtistListView from "./__mocks__/apps/core/presentation/views/ArtistListView";
import BlogListView from "./__mocks__/apps/core/presentation/views/BlogListView";
import BlogDetailView, { RoutedBlogDetailView } from "./__mocks__/apps/core/presentation/views/BlogDetailView";
import AboutView from "./__mocks__/apps/core/presentation/views/AboutView";
import ContactView from "./__mocks__/apps/core/presentation/views/ContactView";
import AddBlogView from "./__mocks__/apps/admin/presentation/views/AddBlogView";
import ComingSoon from "./__mocks__/apps/core/presentation/views/ComingSoon";
import { RoutedCartView } from "./__mocks__/apps/core/presentation/views/CartView";
import { RoutedOrderDetailView } from "./__mocks__/apps/admin/presentation/views/OrderDetailView";


export default class PGRouter extends React.Component{

	render(): React.ReactNode {

		return (
			<Routes>
				<Route path="/" element={<HomeView />} />
				<Route path="/auth/signup/" element={<ClientSignupView />}/>
				<Route path="/auth/login/" element={<LoginView />}/>
				<Route path="/auth/logout/" element={<LogoutView />}/>
				<Route path="/admin/login/" element={<AdminLoginView/>}/>
				<Route path="/auth/email-verify/" element={
					<AuthenticatedComponent validStatus={[AuthenticationStatus.verification]} redirectionMap={new Map<AuthenticationStatus, string>([
						[AuthenticationStatus.none, "/auth/login"],
						[AuthenticationStatus.authenticated, "/"]
					])}>
						<EmailVerificationView />
					</AuthenticatedComponent>
				}/>


				<Route path="/artwork/:id" element={<RoutedArtworkDetailView/>}/>
				<Route path="/exhibitions/" element={<ExhibitionListView />}/>
				<Route path="/exhibition/:id" element={<RoutedExhibitionDetailView />}/>
				<Route path="/blogs/" element={<BlogListView />}/>
				<Route path="/blog/:id" element={<RoutedBlogDetailView />}/>
				

				<Route path="/search" element={
					<AuthenticatedComponent>
						<SearchView/>
					</AuthenticatedComponent>
				}/>

				<Route path="/cart/:artworkId" element={
					<AuthenticatedComponent>
						<RoutedCartView />
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

				<Route path="/artist/:id" element={
					<RoutedArtistDetailView />
				}/>
				<Route path="/artists" element={
					<ArtistListView />
				}/>
				<Route path="/about" element={
					<AboutView />
				}/>
				<Route path="/contact" element={
					<ContactView />
				}/>
				<Route path="/comingsoon" element={
					<ComingSoon />
				}/>
				

				<Route path="/admin/dashboard" element={
					<AuthenticatedComponent redirectTo="/admin/login" allowedRoles={[Role.admin]}>
						<DashBoardView/>
					</AuthenticatedComponent>
				} />

				<Route path="/admin/artist/add" element={
					<AuthenticatedComponent redirectTo="/admin/login" allowedRoles={[Role.admin]}>
						<AddArtistView/>
					</AuthenticatedComponent>
				} />

				<Route path="/admin/artist/edit/:id" element={
					<AuthenticatedComponent redirectTo="/admin/login" allowedRoles={[Role.admin]}>
						<RoutedArtistEditView />
					</AuthenticatedComponent>
				} />
				
				<Route path="/admin/artwork/add" element={
					<AuthenticatedComponent redirectTo="/admin/login" allowedRoles={[Role.admin]}>
						<AddArtworkView/>
					</AuthenticatedComponent>
				} />

				<Route path="/admin/artwork/edit/:id" element={
					<AuthenticatedComponent redirectTo="/admin/login" allowedRoles={[Role.admin]}>
						<RoutedEditArtworkView />
					</AuthenticatedComponent>
				} />
				
				<Route path="/admin/exhibition/add" element={
					<AuthenticatedComponent redirectTo="/admin/login" allowedRoles={[Role.admin]}>
						<AddExhibitionView/>
					</AuthenticatedComponent>
				} />

				<Route path="/admin/exhibition/edit/:id" element={
					<AuthenticatedComponent redirectTo="/admin/login" allowedRoles={[Role.admin]}>
						<RoutedEditExhibitionView />
					</AuthenticatedComponent>
				} />
				
				<Route path="/admin/orders/" element={
					<AuthenticatedComponent redirectTo="/admin/login" allowedRoles={[Role.admin]}>
						<OrderListView/>
					</AuthenticatedComponent>
				} />

				<Route path="/admin/order/:id" element={
					<AuthenticatedComponent redirectTo="/admin/login" allowedRoles={[Role.admin]}>
						<RoutedOrderDetailView />
					</AuthenticatedComponent>
				} />

				<Route path="/admin/blog/add" element={
					<AuthenticatedComponent redirectTo="/admin/login" allowedRoles={[Role.admin]}>
						<AddBlogView />
					</AuthenticatedComponent>
				} />

				

			</Routes>
		)
	}

}