import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import './App.css'
import S from './S';
import LoginScreen from './LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './feature/UserSlice';
import ProfileScreen from './ProfileScreen';

function App() {

  const user=useSelector(selectUser);

  const dispatch=useDispatch();

  useEffect(()=>{
    const unsubscribe =auth.onAuthStateChanged((userAuth)=>{
     if(userAuth){
      dispatch(
        login({
          uid:userAuth.uid,
          email:userAuth.email,
        })
      )
      console.log("user log in:",userAuth)
     } 
     else{
      dispatch(logout());
      console.log("logged out")
     }
    })

    return unsubscribe;
   },[dispatch])
  return (
    <div className='app'>
      <BrowserRouter>
      

      <Routes>
        {!user ?(
          <>
          <Route path="/login" element={<LoginScreen />} />
           <Route path="*" element={<LoginScreen />} />
           </>
          
        ):(
          <>
          <Route path="/" element={<HomeScreen />} />
          
           <Route path="/profile" element={<ProfileScreen/>} />

           <Route path="*" element={<HomeScreen />} />

            </>
          
          
          
          
        )}
      </Routes>
      
    </BrowserRouter>
    </div>
    
  );
}




export default App


    





