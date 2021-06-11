
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Sidebar from './components/site/Sidebar';
import FuntionalComponentDemo from './components/concepts/FunctionalComponents/FunctionalComponentDemo';
import {
  BrowserRouter as Router 
  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
      <FuntionalComponentDemo/>
      Testing Testing
    </div>
  )
};

export default App;
