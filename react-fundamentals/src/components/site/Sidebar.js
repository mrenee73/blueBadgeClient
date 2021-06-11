import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
<<<<<<< HEAD
import signPic from '../../assets/neighborhoodsign.jpg';
=======

import neighborhood from '../'
>>>>>>> c4e3462d94cc7cfff395431fb2b7889915bb275c

import Resource from ''


const Sidebar = () => {
    return(
        <div className= 'sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                <img id='signPic' src={signPic} alt='neighborhood sign'/>
                    <li><Link to ='/'>Home</Link></li>
                    <li><Link to ='/'>Sign In</Link></li>
                    <li><Link to ='/'>Register</Link></li>
                    <li><Link to ='/'>Log Out</Link></li>
                    <li><Link to ='/functionalcomponent'>Contact Us</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/'><Home /></Route>
                   
                </Switch>
        </div>
        </div>
    );
};

export default Sidebar;