import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './Entry.css'


const CreateEntry = (props) => {
    const[titleOfEntry, setTitleOfEntry] = useState('');
    const[contentOfEntry, setContentOfEntry] = useState('');
    
    const postEntry = e => {
        e.preventDefault();

        let url = 'http://localhost:3000/entry/';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({nameOfPie: nameOfPie,baseOfPie: baseOfPie,}),
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
            <h1>New Entry</h1>
                <Form onSubmit={postEntry}>
                    <FormGroup>
                        <Label htmlFor="titleOfEntry">Title</Label>
                        <Input name="titleOfEntry" value={titleOfEntry} onChange={(e) => setTitleOfEntry(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="contentOfEntry">Password</Label>
                        <Input name="contentOfEntry" value = {contentOfEntry} onChange={(e) => setContentOfEntry(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Post</Button>
                </Form>
        </div>
    )
    
}

export default CreateEntry;