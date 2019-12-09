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

    const svgSize = {width: '5vh', height: '5vh'};

    const heartIcon = <svg style={svgSize} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart"
                           className="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 512 512">
        <path fill="currentColor"
              d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
    </svg>;

    const starIcon = <svg style={svgSize} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                          className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512">
        <path fill="currentColor"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
    </svg>;

    const pawIcon = <svg style={svgSize} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paw"
                         className="svg-inline--fa fa-paw fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512">
        <path fill="currentColor"
              d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"/>
    </svg>;


    return (
        <div className={'pokemon-card-container'}>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={url}/>
                <Card.Body>
                    <Card.Title>{Capitalize(data.name)}</Card.Title>
                </Card.Body>
                <DisplayType types={data.types}/>
                <Abilities abilities={data.abilities}/>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Weight: ~ {data.weight / 10} kg</ListGroupItem>
                    <ListGroupItem>Height: ~ {data.height / 10} m</ListGroupItem>
                    <ListGroupItem>
                        <div className="icon-container">
                            <button className='heart-container'> {heartIcon} </button>
                            <button className='star-container'> {starIcon} </button>
                            <button onClick={() => saveToCatchedList(data.id)} className='paw-container'> {pawIcon} </button>
                        </div>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </div>

    )
}

function saveToCatchedList(id){
    fetch(`http://localhost:8080/pokemon/mypokemon/add/${id}`, {
        method: 'PUT',
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
                            className={type.name}>{Capitalize(type.name)}</Button>
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
                            <Dropdown.Item eventKey={i} key={`${i}-key`}>{Capitalize(ability.name)}</Dropdown.Item>
                        )
                    )}
                </DropdownButton>
            </ButtonToolbar>
        </div>
    )
}

export default PokemonDetails;