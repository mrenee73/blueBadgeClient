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
        <p>This is place holder</p>
    </div>
)
}


export default Login;