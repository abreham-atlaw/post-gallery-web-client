import './App.css'
import PGRouter from './Router'
import SearchViews from './__mocks__/apps/artAndSearch/presentation/views/searchArtist'
import ClientSignupView from './__mocks__/apps/auth/presentation/views/clientSignupView'
import LoginView from './__mocks__/apps/auth/presentation/views/loginView'
import MobileSignUpView from './__mocks__/apps/auth/presentation/views/mobileClientSignUpView'
import SearchView from './__mocks__/apps/core/presentation/views/SearchView'
import './index.css'


function App() {

  return (
    <>
      <SearchViews />

    </>
  )
}

export default App
