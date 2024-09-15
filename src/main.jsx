import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './components/home'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
  
    <Route path='/' element={<App/>}>
        <Route path='' element={<Home/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='about' element={<About/>} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
