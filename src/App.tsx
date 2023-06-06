import './App.css'
import PGRouter from './Router'
import ClientSignupView from './__mocks__/apps/auth/presentation/views/clientSignupView'
import LoginView from './__mocks__/apps/auth/presentation/views/loginView'
import MobileSignUpView from './__mocks__/apps/auth/presentation/views/mobileClientSignUpView'
import ArtworkDetailView from './__mocks__/apps/core/presentation/views/ArtworkDetailView'
import CartView from './__mocks__/apps/core/presentation/views/CartView'
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
