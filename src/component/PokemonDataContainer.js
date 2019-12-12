import React, {useEffect, useState} from "react";
import Loading from "./svg components/Loading";
import PokemonCards, {Buttons} from "./PokemonCards";

function DataContainer() {

    const [error, hasError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState({});


    useEffect(() => {
            async function fetchData() {
                setLoading(true);
                const response = await fetch("http://localhost:8080/pokemon/");
                if (response.status === 404 || response.status === 403) {
                    hasError(true);
                    setLoading(false);
                } else {
                    const data = await response.json();
                    setResponse(data);
                    hasError(false);
                    setLoading(false);
                }
            }

            fetchData();
        }, []
    );

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (loading) {
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

export default DataContainer;