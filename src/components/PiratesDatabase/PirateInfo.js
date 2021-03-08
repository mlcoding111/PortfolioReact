import React from 'react'
import { ListGroup, ListGroupItem, Card } from 'react-bootstrap'

export default function PirateInfo(props) {
    return (
        <>
            <Card style={{ width: '70%' }}>
                <Card.Img variant="top" src={props.picture} />
                <Card.Body>
                    <Card.Title ><h1>{props.name}</h1></Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush float-left font-weight-bold">
                    <ListGroupItem>{props.affiliation}</ListGroupItem>
                    <ListGroupItem>{props.fruit}</ListGroupItem>
                    <ListGroupItem>{props.bounty}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                <button className="btn btn-success px-3 mx-2">Edit</button>
                    {/* <button className="btn btn-danger px-3 mx-2">Delete</button> */}

                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </>
    )
}
