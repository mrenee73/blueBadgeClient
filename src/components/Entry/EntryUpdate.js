import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../../helpers/environment';


const UpdateEntry = (props) => {
    const[editTitleOfEntry, setEditTitleOfEntry] = useState(props.entryToUpdate.title);
    const[editContentOfEntry, setEditContentOfEntry] = useState(props.entryToUpdate.description);
    const[editCategoryOfEntry, setEditCategoryOfEntry] = useState(props.entryToUpdate.category);
    const[editStatusOfEntry, setEditStatusOfEntry] = useState(props.entryToUpdate.status);
    // const[editDateOfEntry, setEditDateOfEntry] = useState(date);

    

    console.log(props.entryToUpdate);
    const editEntry = e => {
        e.preventDefault();


        fetch(`${APIURL}/log/update/${props.entryToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({log:{title: editTitleOfEntry, description: editContentOfEntry,category:editCategoryOfEntry,status:editStatusOfEntry}}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization': props.token
            })
        })
        .then((response) => response.json())
        .then((result) =>{
        console.log(result);
        
    }).then(() => props.fetchEntries())
    .then(()=> props.updateOff())
    
    .catch(err => console.log(err));

    }

    return(
        <div>
            <h1>Update Entry</h1>
                <Form onSubmit={editEntry}>
                    <FormGroup>
                        <Label htmlFor="editTitleOfEntry">Title</Label>
                        <Input name="editTitleOfEntry" value={editTitleOfEntry} onChange={(e) => setEditTitleOfEntry(e.target.value)}/>
                    </FormGroup>
                    {/* <FormGroup>
                        <Label htmlFor="editDateOfEntry">Date</Label>
                        <Input Type= "date" name="editDateOfEntry" value={editDateOfEntry} onChange={(e) => setEditDateOfEntry(e.target.value)}/>
                    </FormGroup> */}
                    <FormGroup>
                        <Label htmlFor="editStatusOfEntry">Status:</Label>
                        <Input type="select" name="editStatusOfEntry" value={editStatusOfEntry} onChange={(e) => setEditStatusOfEntry(e.target.value)}>
                        <option></option>
                        <option value = "Pending">Pending</option>
                        <option value = "Resolved">Resolved</option>
                        
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="editCategoryOfEntry">Category:</Label>
                        <Input type="select" name="editCategoryOfEntry" value={editCategoryOfEntry} onChange={(e) => setEditCategoryOfEntry(e.target.value)}>
                        <option></option>
                        <option value = "General">General</option>
                        <option value = "Neighborhood Happy">Neighborhood Happy</option>
                        <option value = "Request Help">Request Help</option>
                        <option value = "Issue">Issue</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="editContentOfEntry">Content</Label>
                        <Input name="editContentOfEntry" value = {editContentOfEntry} onChange={(e) => setEditContentOfEntry(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Post</Button>
                </Form>
        </div>
    )
    
}

export default UpdateEntry;