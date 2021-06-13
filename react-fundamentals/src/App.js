
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Landingpage  from './components/UserLandingPage/UserLandingPage';

import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Sidebar from './components/site/Sidebar';

import {
  BrowserRouter as Router 
  } from 'react-router-dom';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem)('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.clear();
    setInterval('');
  }

  const clearToken = () => {
    localStorage.clear();
  }
  
  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <LandingPage token ={sessionToken}/>)
    : <Auth updateToken ={updateToken}/>)
  }
  return (

    <div className="App">
      <Header />
      <Router>
        <Sidebar clearToken={clearToken}/>
        {protectedViews()}
      </Router>
      <Footer />

    </div>
  )
};

export default App;
