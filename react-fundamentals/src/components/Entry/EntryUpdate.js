import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './EntryUpdate.css'


const updateEntry = (props) => {
    const[editTitleOfEntry, setEditTitleOfEntry] = useState('');
    const[editContentOfEntry, setEditContentOfEntry] = useState('');
    const[editCategoryOfEntry, setEditCategoryOfEntry] = useState('');
    const[editStatusOfEntry, setEditStatusOfEntry] = useState('');
    const[editDateOfEntry, setEditDateOfEntry] = useState('');
    
    const editEntry = e => {
        e.preventDefault();

        let url = 'http://localhost:4000/entry/';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({log:{title: editTitleOfEntry, description: editContentOfEntry,category:editCategoryOfEntry,status:editStatusOfEntry,date:editDateOfEntry}}),
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
            <h1>Update Entry</h1>
                <Form onSubmit={editEntry}>
                    <FormGroup>
                        <Label htmlFor="editTitleOfEntry">Title</Label>
                        <Input name="editTitleOfEntry" value={title} onChange={(e) => setEditTitleOfEntry(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="editDateOfEntry">Date</Label>
                        <Input Type= "date" name="editDateOfEntry" value={date} onChange={(e) => setEditDateOfEntry(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="editStatusOfEntry">Status:</Label>
                        <Input type="select" name="editStatusOfEntry" value={status} onChange={(e) => setEditStatusOfEntry(e.target.value)}>
                        <option></option>
                        <option value = "Pending">Pending</option>
                        <option value = "Resolved">Resolved</option>
                        
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="editCategoryOfEntry">Category:</Label>
                        <Input type="select" name="editCategoryOfEntry" value={category} onChange={(e) => setEditCategoryOfEntry(e.target.value)}>
                        <option></option>
                        <option value = "General">General</option>
                        <option value = "Neighborhood Happy">Neighborhood Happy</option>
                        <option value = "Request Help">Request Help</option>
                        <option value = "Issue">Issue</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="editContentOfEntry">Content</Label>
                        <Input name="editContentOfEntry" value = {description} onChange={(e) => setEditContentOfEntry(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Post</Button>
                </Form>
        </div>
    )
    
}

export default updateEntry;