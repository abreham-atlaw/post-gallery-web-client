import './App.css'
import PGRouter from './Router'
import AddArtistView from './__mocks__/apps/admin/presentation/views/AddArtistView'
import AddArtworkView from './__mocks__/apps/admin/presentation/views/AddArtworkView'
import DashBoardView from './__mocks__/apps/admin/presentation/views/DashboardView'
import WriteArtistView from './__mocks__/apps/admin/presentation/views/WriteArtistView'
import ClientSignupView from './__mocks__/apps/auth/presentation/views/clientSignupView'
import LoginView from './__mocks__/apps/auth/presentation/views/loginView'
import MobileSignUpView from './__mocks__/apps/auth/presentation/views/mobileClientSignUpView'
import ArtworkDetailView from './__mocks__/apps/core/presentation/views/ArtworkDetailView'
import CartView from './__mocks__/apps/core/presentation/views/CartView'
import CheckOutView from './__mocks__/apps/core/presentation/views/CheckoutVIew'
import HomeView from './__mocks__/apps/core/presentation/views/HomeView'
import SearchView from './__mocks__/apps/core/presentation/views/SearchView'
import './index.css'


function App() {

  return (
    <>
      <PGRouter />

    </>
  )
}

export default App
