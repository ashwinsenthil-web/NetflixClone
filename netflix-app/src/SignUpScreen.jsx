import React, { useRef } from 'react'
import './SignUpScreen.css'

import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function SignUpScreen() {

  const emailRef=useRef(null);
  const passwordRef=useRef(null);
  const navigate=useNavigate();

  

    const register = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log('User signed up:', userCredential.user);
    } catch (error) {
      console.error(error.message)
    }
  };

 const signIn = async (e) => {
    e.preventDefault();

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log('User signed in:', userCredentials.user);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };
  
  return (
    <div className='SignUpScreen'>
        <h1>Sign In</h1>
        <form action="">
          <input ref={emailRef} className='mb-2 ' type="email" placeholder='Email' />
        <input ref={passwordRef} type="password" placeholder='Password' />
        <button className="signInbtn"onClick={signIn} >Sign In</button>
        <h6><span className='grey'>New to Netflix?</span><span className='SignIn-lnk' onClick={register} >Sign Up now</span></h6>
        </form>


        
        
      
    </div>
  )
}

export default SignUpScreen