import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Refer from "./../components/refer"
import Nav from "./../components/nac"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Refer/> */}
      <Nav/>
    </>
  )
}

export default App
