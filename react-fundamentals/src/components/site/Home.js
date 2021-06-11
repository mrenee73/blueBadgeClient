import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className= 'main'>
            <div className= 'mainDiv'>
                <h1>
                    Welcome to your HOA
                </h1>

                <ul>
                    <li> We have tried to collect the very best resources for ths app, and we have cited those <Link to='/resources'>here</Link>.
                    </li>
                    <li>
                        <link to='/resources'>React resources</link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;