import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

function PokemonCards(props) {
    const pokemons = props.response;
    console.log(pokemons);
    console.log("asd");
    return (
        <div>
            {pokemons.map(
                pokemon => (
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey={pokemon.name}>
                                {/*<Image id={pokemon.id}/>{pokemon.name}*/}
                                {pokemon.url} {pokemon.name}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={pokemon.name}>
                                <Card.Body>Kukuccs!</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                )
            )}
        </div>
    )
}

function Image(props) {
    const id = props.id;
    let srcUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
    return (
        <img src={srcUrl} alt="new"/>
    )
}

export default PokemonCards;