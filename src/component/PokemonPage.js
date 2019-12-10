import React, {useState, useEffect} from "react";
import Loading from "./Loading";
import PokemonDetails from "./PokemonDetails";

function PokemonPage({match}) {

    const [hasError, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const response = await fetch(`http://localhost:8080/pokemon/name/${match.params.name}`);
            if (response.status === 404 || response.status === 403) {
                setErrors(true);
                setLoading(false);
            } else {
                let data = await response.json();
                setData(data);
                setLoading(false);
            }
        }

        fetchData();
    }, [match.params.name]);

    if (hasError) {
        return <div className={'error-container'}>Pokemon not found!</div>;
    } else if (loading) {
        return <Loading/>;
    } else {
        return (
            <div className={'pokemon-details'}>
                <PokemonDetails data={data}/>
            </div>
        );
    }
}

export default PokemonPage
