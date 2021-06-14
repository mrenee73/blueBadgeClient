import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import signPic from '../../assets/neighborhoodsign.jpg';
// import Register from '../Register/Register';
// import Login from '../Login/Login';




const Sidebar = (props) => {
    return(
        <div className= 'sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                <img id='signPic' src={signPic} alt='neighborhood sign'/>
                    <li><Link to ='/'>Home</Link></li>
                    {/* <li><Link to ='/Login'>Log In</Link></li>
                    <li><Link to ='/Register'>Register</Link></li> */}
                    <li><Link to ='/'onClick={props.clearToken}>Log Out</Link></li>
                    <li><Link to ='/functionalcomponent'>Contact Us</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    {/* <Route exact path='/Login'><Login updateToken ={props.updateToken} /></Route>
                    <Route exact path='/Register'><Register /></Route>
                     */}
                
                </Switch>
        </div>
        </div>
    );
};

export default Sidebar;