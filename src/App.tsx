import './App.css'
import PGRouter from './Router'
import DashBoardView from './__mocks__/apps/admin/presentation/views/DashboardView'
import ClientSignupView from './__mocks__/apps/auth/presentation/views/clientSignupView'
import LoginView from './__mocks__/apps/auth/presentation/views/loginView'
import MobileSignUpView from './__mocks__/apps/auth/presentation/views/mobileClientSignUpView'
import ArtworkDetailView from './__mocks__/apps/core/presentation/views/ArtworkDetailView'
import CartView from './__mocks__/apps/core/presentation/views/CartView'
import CheckOutView from './__mocks__/apps/core/presentation/views/CheckoutVIew'
import SearchView from './__mocks__/apps/core/presentation/views/SearchView'
import './index.css'


function App() {

  return (
    <>
      <DashBoardView />

    </>
  )
}

export default App
