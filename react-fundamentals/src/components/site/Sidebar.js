import {
    Route,
    Link,
    Switch   
} from 'react-router-dom';
import {Button} from 'reactstrap';
import Home from './Home';
import CreateEntry from '../Entry/Entry'
import ContactForm from '../ContactUs/ContactUs';
import EntryIndex from '../Entry/EntryIndex';
import CommunityIndex from '../Community/Community';




const Sidebar = (props) => {
    console.log(props);
    return(
        <div className= 'sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Button><Link to ='/'onClick={props.clearToken}>Log Out</Link></Button></li>
                    <br/>
                    <li><Button><Link to ='/community'>View Community Posts</Link></Button></li>
                    <br/>
                    <li><Button><Link to ='/entry'>Create a New Post</Link></Button></li>
                    <br/>
                    <li><Button><Link to ='/entryindex'>My Post History</Link></Button></li>
                    <br/>
                    <li><Button><Link to ='/contactus'>Contact Us</Link></Button></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/entry'><CreateEntry token ={props.token}/></Route>
                    <Route exact path='/contactus'><ContactForm /></Route>
                    <Route exact path='/entryindex'><EntryIndex token ={props.token}/></Route>
                    <Route exact path='/community'><CommunityIndex /></Route>
                </Switch>
        </div>
        </div>
    );
};

export default Sidebar;