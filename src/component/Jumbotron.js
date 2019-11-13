import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";

function Jumbo() {
    return (
        <Jumbotron className={"jumbo"} fluid>
            <h1>
                <img src="https://fontmeme.com/permalink/191113/6e95aa996f15274bb7227ea5bda5e7d6.png"
                     alt="pokemon-font"
                     border="0"></img>
            </h1>
        </Jumbotron>
    )
}

export default Jumbo;