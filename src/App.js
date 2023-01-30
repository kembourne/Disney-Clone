import React from 'react'
import Navbar from './Components/Navbar'
import { Route,Routes } from 'react-router'
import Carosal from './Components/Carosal'
import VideoPart from './Components/VideoPart'
import Home from './Components/Home'
import Login from './Components/Login'
export default function App() {

  return (
    <div>
  <div className="main">
<Routes >
  <Route path='Login/Signup' element={<Login />} />
  <Route path='/' element={<Home />} />
</Routes>
   
  </div>

    </div>
  )
}
