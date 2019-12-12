import React from "react";
import {Link} from "./PokemonCards";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import FriendCards from "./FriendCards";

function UserPage() {

    return (
        <div className={"user-interface"}><Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    Friends
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body><FriendCards/></Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    Pending requests
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion></div>
    )

}


export default UserPage
