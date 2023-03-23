import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import MenuBar from './components/MenuBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <nav className="sidebar close">
      <Header />
      <MenuBar />         
    </nav>
    
  )
}

export default App
