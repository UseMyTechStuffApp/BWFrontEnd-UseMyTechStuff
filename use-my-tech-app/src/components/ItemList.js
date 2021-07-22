import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css';

const ItemList = props => {
    return(
        <div className="tech-card">
            <Card style={{ width: '18rem'}}>
                <Card.Img variant='top' height='200' src='https://images.unsplash.com/photo-1505949842063-0f8a621ba848?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' alt='Blue Microphone'/>
                <Card.Body>
                    <Card.Title>Blue Microphone</Card.Title>
                    <Card.Text>Location: </Card.Text>
                    <Card.Text>Professional microphone perfect for podcasting, Twitch streaming, music recording, and voice overs.</Card.Text>
                    <Button>Request Pricing</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
 export default ItemList;
