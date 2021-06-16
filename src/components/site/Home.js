import React, {useState}from 'react';
import {Form, FormGroup, Label, Input, Button, Container} from 'reactstrap';
import couplePic from '../../assets/coupleWalking.jpg'
import APIURL from '../../helpers/environment';


const Home = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName]  = useState('');
    const [email, setEmail]  = useState('');
    const [password, setPassword]  = useState('');
    const [street, setStreet] = useState(''); 
    const [login, setLogin] = useState(true);
    
    const title = () => {
        return login ? 'HOA Members Login' : 'HOA Members Register';
            }
    const buttonText = () => {
        return login ? 'Register as a Member!' : 'Member Login';
            }
    const loginToggle = (event) => {
        event.preventDefault();
        
        setLogin(!login);
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setStreet('')
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
            password: password,
            street: street,
        }

        let url = login ? `${APIURL}/user/login` : `${APIURL}/user/register`;

        fetch(url,{
            method: 'POST',
            body: JSON.stringify({user: reqBody}), 
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

    const signupFields = () => !login ? 
    (
        <div>
            <FormGroup>
            <Label htmlFor='firstName'>First Name</Label>
            
            <Input type="text" id="firstName" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} />
           </FormGroup>    
            
            <FormGroup>
            <Label htmlFor='lastName'>Last Name</Label>
            
            <Input type="text" id="lastName" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} />
            </FormGroup>
            <FormGroup>
            <Label htmlFor='street'>Street Address</Label>
            <Input type="text" 
                id="street" 
                value={street} 
                onChange={(e) => setStreet(e.target.value)} />
            </FormGroup>
            
        </div>
    ) : null;
    
    


    return(
        <div className= 'main'>
            <div className= 'mainDiv'>
                
                <h1 className= "whiteHeading"> Welcome to our Community!</h1>
                <br/>
                <h4 className= "whiteHeading">Welcome to our community web site. Once you register you can log in and post about things happening in the neighborhood as well as find out what is happening with your fellow neighbors. </h4>

                <img id="couplePic" 
                src={couplePic} 
                alt="Couple Pic" ></img>
                <br/>
                <Button onClick={loginToggle}>{buttonText()}</Button>
                <br />
                <br/>
                <div className="position-relative">
                <Container>
                <h1>{title()}</h1>  
                <Form>
                    {signupFields()}
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </FormGroup>
                
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type= "password" name="password" value = {password} 
                    onChange={(e) => setPassword(e.target.value)}
                    
                    />
                    
      
                </FormGroup>
                         
                         <Button type="submit" disabled={(password.length >= 5 )? false : true} onClick={handleSubmit}>Submit</Button>
                        
                        
                </Form>
                </Container>
                </div>
            </div>
        </div>
    );
};

export default Home;