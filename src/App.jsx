import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Content from './Components/Content'
import Content1 from './Components/Content1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Content/>
     <Content1/>
    </>
  )
}

export default App
