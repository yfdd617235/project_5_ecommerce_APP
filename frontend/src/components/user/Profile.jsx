import React from 'react';
import Card from 'react-bootstrap/Card';
import img from './img/user.jpg'
import './profile.css'

const Profile = () => {
    const userProfile = localStorage.getItem('userProfile')
    const user = JSON.parse(userProfile)
    console.log("User:", user)
    return (
        <>
        <div className='main'>
            <div className='main-title'>
                <h2>USER PROFILE</h2>
            </div>
            <div className='cards'>
            <Card style={{ width: '18rem' }}  className='card text'>
                <Card.Img variant="top" src={img} alt={user.name} />
                <Card.Body>
                    <Card.Title> {user.name} {user.LastName}</Card.Title>
                    <Card.Text> Cellphone: {user.phone} </Card.Text>
                    <Card.Text> Email: {user.email} </Card.Text>
                    <Card.Text> ID: {user._id} </Card.Text>
                </Card.Body>
            </Card>
            </div>

        </div>

        </>
    );
}

export default Profile;
