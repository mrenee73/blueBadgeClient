import React, {useState}from 'react';
import './Login.css';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitAction = (e) => {
        e.preventDefault();
        console.log(`Prefetch: ${username},${password}`);
        fetch ('https://localhost:4000/users/login',{
            method:'POST',
            body: JSON.stringify({user:{username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json',
        })
    })
    .then((response) => response.json())
    .then((result) =>{
        console.log(result);
        props.updateToken(result.sessionToken);
    }).catch(err => console.log(err));

}



return(
    <div>
                <form>
            <h1>{title()}</h1>
            {signupFields()}
            <label htmlFor="email">Email:</label>
            <br/>
            <input type="text" 
            id='email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} />
            <br/>
            <label htmlFor="password">Password:</label>
            <br/>
            <input type="password" 
            id='password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} />
            <br/>
            <button onClick={loginToggle}>Login/Signup Toggle</button>
            <br />
            <button type="submit" onClick={handleSubmit}>Submit User Data</button>
        </form>
    </div>
)
}


export default Login;