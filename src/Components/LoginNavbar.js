import React from 'react'
import logo from '../images/logo.svg'

export default function LoginNavbar() {
  return (
    <>

   <div className="loginnavbarmain">
    <div className="loginnavbarinner">
      <img className='navimg ' src={logo} alt="none" />
      <button className='loginbutton2'><h3>Login</h3></button>

    </div>
   </div>
    </>
  )
}
