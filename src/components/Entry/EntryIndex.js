import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import APIURL from '../../helpers/environment';

import EntryTable from './EntryTable';
import UpdateEntry from './EntryUpdate';

const EntryIndex = (props) => {
    const [entries, setEntries] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [entryToUpdate, setEntryToUpdate] = useState({});

    const fetchEntries = () => {
        fetch(`${APIURL}/log/mine/`,{
            method: 'GET',
            headers: new Headers ({
                'Content-Type' : 'application/json',
                'Authorization' : props.token
            })
        }).then ((res) => res.json())
        .then ((logData) => {
            setEntries(logData);
            console.log(logData); 
        })
    }

    useEffect(() => {
        fetchEntries();
    }, [])

    const editUpdateEntry = (entry) => {
        setEntryToUpdate(entry);
        console.log(entry);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    return(
        <div className= "main">
            <div className= "mainDiv">
    <Container>
        
        <Row>
            
            <Col md="9">
                <EntryTable entries={entries} editUpdateEntry={editUpdateEntry} updateOn={updateOn} fetchEntries={fetchEntries} token={props.token}/>
            </Col>
            <Col md="9">
            {updateActive ? <UpdateEntry entryToUpdate={entryToUpdate} updateOff={updateOff} token={props.token} fetchEntries={fetchEntries}/> : <> </>}
            </Col>
        </Row>
    </Container>
        </div>
        </div>
     )
}

export default EntryIndex;