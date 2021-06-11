import React, {useState}from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './Login.css';

const Login = (props) => {
    const [useremail, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitAction = (e) => {
        e.preventDefault();
        console.log(`Prefetch: ${useremail},${password}`);
        fetch ('https://localhost:3000/users/login',{
            method:'POST',
            body: JSON.stringify({user:{useremail: useremail, password: password}}),
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
        <h1>HOA Members Login</h1>
            <Form onSubmit={submitAction}>
                <FormGroup>
                    <Label htmlFor="useremail">Email</Label>
                    <Input name="useremail" value={useremail} onChange={(e) => setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input name="password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
    </div>
)
}


export default Login;