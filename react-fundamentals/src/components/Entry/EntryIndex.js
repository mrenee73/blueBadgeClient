import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';

import EntryTable from './EntryTable';
import UpdateEntry from './EntryUpdate';

const EntryIndex = (props) => {
    const [entries, setEntries] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [entryToUpdate, setEntryToUpdate] = useState({});

    const fetchEntries = () => {
        fetch('http://localhost:4000/log/mine/',{
            method: 'GET',
            headers: new Headers ({
                'Content-Type' : 'application/json',
                'Authorization' : props.token
            })
        }) .then ((res) => res.json())
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
    <Container>
        
        <Row>
            {/* <Col md="3">
                <WorkoutCreate fetchWorkouts={fetchWorkouts} token={props.token} />
            </Col> */}
            <Col md="9">
                <EntryTable entries={entries} editUpdateEntry={editUpdateEntry} updateOn={updateOn} fetchEntries={fetchEntries} token={props.token}/>
            </Col>
            {updateActive ? <UpdateEntry entryToUpdate={entryToUpdate} updateOff={updateOff} token={props.token} fetchEntries={fetchEntries}/> : <> </>}
        </Row>
    </Container>
    )
}

export default EntryIndex;