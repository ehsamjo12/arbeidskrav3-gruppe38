import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Header from './pages/Header'


function App() {
<<<<<<< Updated upstream
  return (
    <>
    <Header />
    <Home />
    </>
  )
  
=======
  return <Home />
  const [count, setCount] = useState(0)
>>>>>>> Stashed changes
}

export default App
