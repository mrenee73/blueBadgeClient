import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './EntryUpdate.css'


const updateEntry = (props) => {
    const[editEntry, setEditEntry] = useState('');
    const[editcontentOfEntry, setEditContentOfEntry] = useState('');
    
    const editEntry = e => {
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
                <Form onSubmit={editEntry}>
                    <FormGroup>
                        <Label htmlFor="editEntry">Title</Label>
                        <Input name="editEntry" value={editEntry} onChange={(e) => setEditEntry(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="editcontentOfEntry">Content</Label>
                        <Input name="editcontentOfEntry" value = {editcontentOfEntry} onChange={(e) => setEditContentOfEntry(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Post</Button>
                </Form>
        </div>
    )
    
}

export default updateEntry;