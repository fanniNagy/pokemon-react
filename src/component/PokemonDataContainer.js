import React from "react";
import Loading from "./Loading";
import PokemonCards, {Buttons} from "./PokemonCards";

class DataContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            response: []
        };
    }

    componentDidMount() {
        const url = 'http://localhost:8080/pokemon/';
        fetch(url)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        response: result
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        const {error, isLoaded, response} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Loading/>;
        } else {
            return (
                <div>
                    <PokemonCards response={response}/>
                    <Buttons/>
                </div>
            );
        }
    }
}

export default DataContainer;