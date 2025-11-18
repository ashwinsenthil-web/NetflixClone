import React, { useState,useEffect } from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom';
import ProfileScreen from './ProfileScreen';

function Nav() {
const[scrollNav,setScrollNav]=useState(false);

const Navigate=useNavigate();

function scroll(){
  if(window.scrollY>100){
    setScrollNav(true)
  }
  else{
    setScrollNav(false)
  }
}

useEffect(()=>{
 window.addEventListener("scroll",scroll);
 return()=>window.removeEventListener("scroll",scroll)
},[])

  return (
    <div className={`nav ${scrollNav && 'nav-black'}`}>
        <div className='nav-contents w-100 '>
            <img onClick={()=>{Navigate('/')}} src="/netflix-logo-removebg-preview.png" alt='n' className='net-logo'/>
            <img onClick={()=>{Navigate('/profile')}} src="/netflix-avatar.jpg" alt="" className='net-avatar' />
            
        </div>

    </div>
  )
}

export default Nav

