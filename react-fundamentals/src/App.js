
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import LandingPage  from './components/UserLandingPage/UserLandingPage';
import Home from './components/site/Home'

import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Sidebar from './components/site/Sidebar';

import {
  BrowserRouter as Router 
  } from 'react-router-dom';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
}

const clearToken = () => {
  localStorage.clear();
  setSessionToken('');
}
  
  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <LandingPage token ={sessionToken}/>
    : <Home updateToken ={updateToken}/>)
  }
  return (

    <div className="App">
      <Header />
      
        
        {protectedViews()}
     
      <Footer/>

    </div>
  )
};

export default App;
