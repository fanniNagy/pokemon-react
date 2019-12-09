import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom/";

function PokemonCards(props) {
    const pokemons = props.response;
    return (
        <div className={'card-container'}>
            {pokemons.map(
                pokemon => (
                    <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name}>
                        <Card bg="light" style={{width: '18rem', justifyContent:'center', alignItems:'center'}} >
                            <Card.Img style={{width:'20vh', height: '20vh'  }} variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
                            <Card.Header style={{backgroundColor:'transparent'}}>
                                {Capitalize(pokemon.name)}
                            </Card.Header>

                        </Card>
                    </Link>
                )
            )}
        </div>
    )
}

export function Buttons() {
    return (
        <div className="nav-buttons">
            <Button variant="warning" className="nav-button-previous nav-button">Previous</Button>
            <Button variant="danger" className="nav-button-next nav-button">Next</Button>
        </div>
    )
}

/**
 * @return {string}
 */
export function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default PokemonCards;