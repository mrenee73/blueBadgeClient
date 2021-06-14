
       import React, {useState}from 'react';
       import './UserLandingPage.css';
       import Sidebar from '../site/Sidebar';
       import {
        BrowserRouter as Router 
        } from 'react-router-dom';
       
       const LandingPage = (props) => {
        console.log(props.token);
        return(
            <div>
                <Router>
                <Sidebar updateToken ={props.updateToken} token ={props.token} clearToken={props.clearToken}/>
                </Router>
            </div>
        )

       };
       
       
       
       export default LandingPage
 
      