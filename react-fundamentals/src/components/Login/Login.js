import React, {useState}from 'react';
import './Auth.css';

const Auth = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName]  = useState('');
    const [email, setEmail]  = useState('');
    const [password, setPassword]  = useState('');
    const [login, setLogin] = useState(true);

    const title = () => {
        return login ? 'Login' : 'Signup';   
    }

    const loginToggle = (event) => {
        event.preventDefault();
        setLogin(!login);
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let reqBody = login ?
        {
            email: email,
            password: password
        } : {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }

        let url = login ? 'http://localhost:4000/user/login' : 'http://localhost:4000/user/register';

        fetch(url,{
            method: 'POST',
            body: JSON.stringify(reqBody), 
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        })
            .then(res => res.json())
            .then(json => props.updateLocalStorage(json.token))
            .catch(err => console.log(err))
        
    }

    const signupFields = () => !login ? 
    (
        <div>
            <label htmlFor='firstName'>First Name</label>
            <br/>
            <input type="text" 
                id="firstName" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} />
            <br/>
            <label htmlFor='lastName'>Last Name</label>
            <br/>
            <input type="text" 
                id="lastName" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} />
        </div>
    ) : null;



return(
    <div>
        <p>This is place holder</p>
    </div>
)
}


export default Auth;