import React, {useState}from 'react';
import './Register.css';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');   


    const submitAction = (e) => {
        e.preventDefault();
        console.log(`Prefetch: ${email},${password},${firstName},${lastName},${street}`);
        fetch ('https://localhost:4000/users/Register',{
            method:'POST',
            body: JSON.stringify({user:{email: email, password: password, }}),
            headers: new Headers({
                'Content-Type': 'application/json',
        })
    })
    .then((response) => response.json())
    .then((result) =>{
        console.log(result);
        props.updateToken(result.sessionToken);
    }).catch(err => console.log(err));
};
return(
<div>
  <h1>HOA Members Register</h1>
            <form onSubmit={submitAction}>
                <div class='registerform'>
                    <label htmlFor="email">Email</label>
                    <input name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>                
                <div class='registerform'>
                    <label htmlFor="password">Password</label>
                    <input name="password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div class='registerform'>
                    <label htmlFor="firstName">First Name</label>
                    <input name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div class='registerform'>
                    <label htmlFor="lastName">Last Name</label>
                    <input name="lastName" value = {lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div class='registerform'>
                    <label htmlFor="street">Street Address</label>
                    <input name="street" value = {street} onChange={(e) => setStreet(e.target.value)}/>
                </div>
                <button type="submit">Login</button>
            </form>
</div>
   
)
}

export default Register