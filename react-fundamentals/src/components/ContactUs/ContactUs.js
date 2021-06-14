import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './ContactUs.css'


const contactUs = (props) => {
    const[nameOfForm, setNameOfForm] = useState('');
    const[emailOfForm, setEmailOfForm] = useState('');
    const[dateOfForm, setDateOfForm] = useState('');
    const[messageOfForm, setMessageOfForm] = useState('');
    
    
    const sendMessage = e => {
        e.preventDefault();

        let url = 'http://localhost:4000/entry/';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({log:{name: nameOfForm, email: emailOfForm, date: dateOfForm, message: messageOfForm}}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization': props.sessionToken
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
            <h1>Contact Us</h1>
                <Form onSubmit={sendMessage}>
                    <FormGroup>
                        <Label htmlFor="nameOfForm">Name</Label>
                        <Input name="nameOfForm" value={Name} onChange={(e) => setNameOfForm(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="dateOfForm">Date</Label>
                        <Input Type= "date" name="dateOfForm" value={date} onChange={(e) => setEmailOfForm(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="emailOfForm">Email</Label>
                        <Input Type= "email" name="emailOfForm" value={email} onChange={(e) => setDateOfForm(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="messageOfForm">Message</Label>
                        <Input name="messageOfForm" value = {Message} onChange={(e) => setMessageOfForm(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Send Message</Button>
                </Form>
        </div>
    )
    
}

export default contactUs;