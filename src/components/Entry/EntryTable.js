import React from 'react';
import {Table, Button} from 'reactstrap';
import APIURL from '../../helpers/environment';

const EntryTable = (props) => {
    const deleteEntry = (entry) => {
        fetch(`${APIURL}/log/${entry.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchEntries())
    }

    const entryMapper = () => {
        return props.entries.map((entry,index) =>{
            let date = new Date(entry.date).toLocaleDateString("en-US")
            return(
                <tr key={index}>
                    <th scope="row">{entry.id}</th>
                    <td>{entry.title}</td>
                    <td>{date}</td>
                    <td>{entry.category}</td>
                    <td>{entry.status}</td>
                    <td>{entry.description}</td>
                    <td>
                        <Button  onClick={() => {props.editUpdateEntry(entry); props.updateOn()}}>Update</Button>
                        <Button  onClick={() => {deleteEntry(entry)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h1 className= "whiteHeading"> Post History</h1>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Content</th>

                </tr>
            </thead>
            <tbody>
                {entryMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default EntryTable;