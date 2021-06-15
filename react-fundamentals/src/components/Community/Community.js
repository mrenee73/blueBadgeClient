import React, {useState, useEffect} from 'react';
import {Table} from 'reactstrap';


const CommunityIndex = () => {
    const [community, setCommunity] = useState([])

    const fetchCommunityEntries = () => {
    fetch('http://localhost:4000/log/userInfo/',{
        method: 'GET',
        headers: new Headers ({
            'Content-Type' : 'application/json',           
        })
    }) .then ((res) => res.json())
    .then ((logData) => {
        setCommunity(logData.posts);
        console.log(logData); 
    })
}
console.log(community);
useEffect(() => {
    fetchCommunityEntries();
}, [])




const communityMapper = () => {
    return community.map((posts,index) => {
        return(
            <tr key={index}>
                <th scope="row">`{posts.user.firstName} {posts.user.lastName}</th>
                <td>{posts.title}</td>
                <td>{posts.date}</td>
                <td>{posts.category}</td>
                <td>{posts.status}</td>
                <td>{posts.description}</td>
            </tr>
        )
    })
};

return(
    <>
    <h3>What Your Neighbors Are Saying</h3>
    <hr/>
    <Table striped>
        <thead>
            <tr>
                <th>Resident</th>
                <th>Title</th>
                <th>Date</th>
                <th>Category</th>
                <th>Status</th>
                <th>Content</th>

            </tr>
        </thead>
        <tbody>
            {communityMapper()}
        </tbody>
    </Table>
    </>
)
}

export default CommunityIndex;