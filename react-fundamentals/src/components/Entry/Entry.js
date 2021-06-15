import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './Entry.css'


const CreateEntry = (props) => {
    const[titleOfEntry, setTitleOfEntry] = useState('');
    const[contentOfEntry, setContentOfEntry] = useState('');
    const[categoryOfEntry, setCategoryOfEntry] = useState('');
    const[statusOfEntry, setStatusOfEntry] = useState('');
    const[dateOfEntry, setDateOfEntry] = useState('');
    console.log(props.token);
    const postEntry = e => {
        e.preventDefault();

        let url = 'http://localhost:4000/log/';
        console.log(e);
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({log:{title: titleOfEntry, description: contentOfEntry,category:categoryOfEntry,status:statusOfEntry,date:dateOfEntry}}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization': props.token
            })
        })
        .then((response) => response.json())
        .then((result) =>{
        console.log(result);
            setTitleOfEntry('');
            setDateOfEntry('');
            setStatusOfEntry('');
            setCategoryOfEntry('');
            setContentOfEntry('');
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
                        <Label htmlFor="dateOfEntry">Date</Label>
                        <Input Type= "date" name="dateOfEntry" value={dateOfEntry} onChange={(e) => setDateOfEntry(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="statusOfEntry">Status:</Label>
                        <Input type="select" name="statusOfEntry" value={statusOfEntry} onChange={(e) => setStatusOfEntry(e.target.value)}>
                        <option></option>
                        <option value = "Pending">Pending</option>
                        <option value = "Resolved">Resolved</option>
                        
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="categoryOfEntry">Category:</Label>
                        <Input type="select" name="categoryOfEntry" value={categoryOfEntry} onChange={(e) => setCategoryOfEntry(e.target.value)}>
                        <option></option>
                        <option value = "General">General</option>
                        <option value = "Neighborhood Happy">Neighborhood Happy</option>
                        <option value = "Request Help">Request Help</option>
                        <option value = "Issue">Issue</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="contentOfEntry">Content</Label>
                        <Input name="contentOfEntry" value = {contentOfEntry} onChange={(e) => setContentOfEntry(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Post</Button>
                </Form>
        </div>
    )
    
}

export default CreateEntry;