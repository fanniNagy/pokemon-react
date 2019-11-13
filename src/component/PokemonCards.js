import React from "react";
import Card from "react-bootstrap/Card";

function PokemonCards(props) {
    const pokemons = props.response;
    return (
        <div className={'card-container'}>
            {pokemons.map(
                pokemon => (
                    <Card bg="light" style={{width: '18rem'}} key={pokemon.name}>
                        <Card.Header>{Capitalize(pokemon.name)}</Card.Header>
                    </Card>
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

function Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//React-Router TODO

export default PokemonCards;