import React from 'react'
import styled from 'styled-components'
import image1 from '../images/cta-logo-two.png'
import poster from '../images/login-background.jpg'
import image2 from '../images/cta-logo-one.svg'
import LoginNavbar from './LoginNavbar'
export default function Login() {
  return (
    <>
    <LoginNavbar />

   <div className="loginmain">
   <img  src={image2} alt='none'className='imagelogin'/>
   <button className='loginbutton'><h1>Get all there</h1></button>
   <img src={image1} alt="" className='imagelogin'/>
   </div>
    </>
  )
}
