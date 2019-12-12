import React, {useContext} from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown'
import Button from "react-bootstrap/Button";
import userContext from "./authorization/UserContext";
import HeartIcon from "./svg components/HeartIcon";
import StarIcon from "./svg components/StarIcon";
import PawIcon from "./svg components/PawIcon";

function PokemonDetails(props) {

    const {user} = useContext(userContext);

    const data = props.data;
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.data.id}.png`;

    const svgSize = {width: '5vh', height: '5vh'};

    return (
        <div className={'pokemon-card-container'}>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={url}/>
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                </Card.Body>
                <DisplayType types={data.types}/>
                <Abilities abilities={data.abilities}/>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Weight: ~ {data.weight / 10} kg</ListGroupItem>
                    <ListGroupItem>Height: ~ {data.height / 10} m</ListGroupItem>
                    {(user !== null) ?
                        <ListGroupItem>
                            <div className="icon-container">
                                <button className='heart-container'><HeartIcon styleForIcon={svgSize}/></button>
                                <button className='star-container'><StarIcon styleForIcon={svgSize}/></button>
                                <button onClick={() => saveToCatchedList(data.id, user)}
                                        className='paw-container'><PawIcon styleForIcon={svgSize}/></button>
                            </div>
                        </ListGroupItem>
                        : null}
                </ListGroup>
            </Card>
        </div>

    )
}

function saveToCatchedList(id, user) {

    const token = user ? user.token : null;

    fetch(`http://localhost:8080/pokemon/mypokemon/add/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
        .then((response) => response.text())
        .catch((error) => {
            console.error(error);
            //TODO: proper error handling
        });
}

function DisplayType(props) {
    const types = props.types;
    return (
        <div>
            {types.map(
                (type, i) => (
                    <Button style={{margin: '1px'}} variant="danger" key={i}
                            className={type.name}>{type.name}</Button>
                )
            )}
        </div>
    )
}

function Abilities(props) {
    const abilities = props.abilities;
    return (
        <div style={{alignSelf: 'center', margin: '1px'}}>
            <ButtonToolbar>
                <DropdownButton drop="right" variant="secondary" title="Moves" id="dropdown-button-drop-right"
                                key="right">
                    {abilities.map(
                        (ability, i) => (
                            <Dropdown.Item eventKey={i} key={`${i}-key`}>{ability.name}</Dropdown.Item>
                        )
                    )}
                </DropdownButton>
            </ButtonToolbar>
        </div>
    )
}

export default PokemonDetails;