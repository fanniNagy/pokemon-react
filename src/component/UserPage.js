import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import FriendCards from "./FriendCards";
import PendingFriendCards from "./PendingFriendCards";


function UserPage() {

    const [reloadNeeded, setReloadNeeded] = useState(false);

    return (
        <div className={"user-interface"}><Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    Friends
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body><FriendCards reload={reloadNeeded}/></Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    Pending requests
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body><PendingFriendCards reload={reloadNeeded} setReload={setReloadNeeded}/></Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion></div>
    )

}


export default UserPage
