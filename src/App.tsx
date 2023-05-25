import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClientSignupView from './__mocks__/apps/auth/presentation/views/clientSignupView'
import PGRouter from './Router'


function App() {

  return (
    <>
		<PGRouter/>
    </>
  )
}

export default App
