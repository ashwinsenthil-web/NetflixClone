import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import './App.css'
import S from './S';
import LoginScreen from './LoginScreen';

function App() {

  const user={name:"ashwin"};
  return (
    <div className='app'>
      <BrowserRouter>
      

      <Routes>
        {!user ?(
          <Route path="/s" element={<LoginScreen />} />
        ):(
          <Route path="/" element={<HomeScreen />} />
        )}
      </Routes>
      
    </BrowserRouter>
    </div>
    
  );
}




export default App


    





