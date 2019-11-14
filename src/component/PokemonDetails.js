import React from "react";
import {Capitalize} from "./PokemonCards";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown'
import Button from "react-bootstrap/Button";

function PokemonDetails(props) {
    const data = props.data;
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.data.id}.png`;

    return (
        <div className={'pokemon-card-container'}>
            <Card style={{width: '16rem'}}>
                <Card.Img variant="top" src={url}/>
                <Card.Body>
                    <Card.Title>{Capitalize(data.name)}</Card.Title>
                </Card.Body>
                <DisplayType types={data.types}/>
                <Abilities abilities={data.abilities}/>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Weight: ~ {data.weight / 10} kg</ListGroupItem>
                    <ListGroupItem>Height: ~ {data.height / 10} m</ListGroupItem>
                </ListGroup>
            </Card>
        </div>

    )
}

function DisplayType(props) {
    const types = props.types;
    return (
        <div>
            {types.map(
                (type, i) => (
                    <Button style={{margin:'1px'}} variant="danger" key={i}>{Capitalize(type.name)}</Button>
                )
            )}
        </div>
    )
}

function Abilities(props) {
    const abilities = props.abilities;
    return (
        <div style={{alignSelf:'center', margin:'1px'}}>
            <ButtonToolbar>
                <DropdownButton drop="right" variant="secondary" title="Moves" id="dropdown-button-drop-right"
                                key="right">
                    {abilities.map(
                        (ability, i) => (
                            <Dropdown.Item eventKey={i} key={`${i}-key`}>{Capitalize(ability.name)}</Dropdown.Item>
                        )
                    )}
                </DropdownButton>
            </ButtonToolbar>
        </div>
    )
}

export default PokemonDetails;