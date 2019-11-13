import React from "react";
import Nav from "react-bootstrap/Nav";

function NavigationBar() {
    return(
        <Nav className={'Navbar'} fill variant="pills" defaultActiveKey="#">
            <Nav.Item>
                <Nav.Link href="#">All Pokemons</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Search Pokemon</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2" disabled>Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3" disabled>Register</Nav.Link>
            </Nav.Item>
        </Nav>
    )

}

export default NavigationBar;