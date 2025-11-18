import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'

function LoginScreen() {

  const[SignIn,SetSignIn]=useState(false)

  return (
    <div className='LoginScreen'>
      
      <div className='loginScreen_bg'>
        
        <img className='netFlix_logo' src="/netflix-logo-removebg-preview.png" alt="" />
        <button className='LoginScreen_btn' onClick={()=>{SetSignIn(true)}}>Sign In</button>
         <div className="gradient"></div> 
      </div>
      
      {SignIn ? (
        <SignUpScreen />
      ):(
        <div className="loginScreen_body">
        <h1 className='loginScreen_content'>Unlimited films,TV programmes and more.</h1>
        <h6>Watch anywhere.Cancel at any time.</h6>
        <p>Ready to watch? Enter your email to create or restart your membership</p>

        <div className="loginScreen_input">
          <form >
             
      
     <input  type="email"  placeholder='Email address'/>
     <button className="loginScreen_btn2" onClick={()=>{SetSignIn(true)}}>GET STARTED </button>
    
          </form>
        </div>
      </div>
      )}
      

    </div>
  )
}

export default LoginScreen