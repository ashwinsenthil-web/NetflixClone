import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import './App.css'
import S from './S';
import LoginScreen from './LoginScreen';

function App() {

  const user=null;
  return (
    <div className='app'>
      <BrowserRouter>
      

      <Routes>
        {!user ?(
          <Route path="/l" element={<LoginScreen />} />
        ):(
          <Route path="/" element={<HomeScreen />} />
        )}
      </Routes>
      
    </BrowserRouter>
    </div>
    
  );
}




export default App


    





