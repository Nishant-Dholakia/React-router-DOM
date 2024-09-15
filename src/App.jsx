// import { useState } from 'react'

import Header from './components/header'
import Footer from './components/footer'
import { Outlet } from 'react-router-dom'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Outlet/>
        <Footer/>
    </>
  )
}

export default App
