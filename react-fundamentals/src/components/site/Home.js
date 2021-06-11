import {Link} from 'react-router-dom';
import couplePic from '../../assets/coupleWalking.jpg'

const Home = () => {
    return(
        <div className= 'main'>
            <div className= 'mainDiv'>
                <h1>
                    Welcome to our Community!</h1>

                <h4>Welcome to our community web site. Once you register you can log in and post about things happening in the neighborhood as well as find out what is happening to your fellow neighbors. </h4>

                <img id="couplePic" 
                src={couplePic} 
                alt="Power Button" ></img>
                 



                
            </div>
        </div>
    );
};

export default Home;