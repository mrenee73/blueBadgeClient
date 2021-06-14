
       import React, {useState}from 'react';
       import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
       import './UserLandingPage.css';
       import Sidebar from '../site/Sidebar';
       import {
        BrowserRouter as Router 
        } from 'react-router-dom';
       
<<<<<<< HEAD
       const logCreate = (props) => {

=======
       const LandingPage = (props) => {
        console.log(props.token);
>>>>>>> d2af5eea446c05a7db66581733cfa593f9188dd3
        return(
            <div>
                <Router>
                <Sidebar updateToken ={props.updateToken} token ={props.token} clearToken={props.clearToken}/>
                </Router>
            </div>
        )

       };
       
       
       
       export default LandingPage
 
      