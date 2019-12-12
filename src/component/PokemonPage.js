import React, {useContext, useEffect, useState} from "react";
import Loading from "./svg components/Loading";
import PokemonDetails from "./PokemonDetails";
import userContext from "./authorization/UserContext";

function PokemonPage({match}) {

    const {user} = useContext(userContext);

    const [hasError, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {

        const token = user ? user.token : null;

        async function fetchData() {
            setLoading(true);
            const response = await fetch(`http://localhost:8080/pokemon/name/${match.params.name}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            if (response.status === 404) {
                setErrors("No such pokemon found!");
                setLoading(false);
            } else if (response.status === 403) {
                setErrors("Please log in to see the requested pokemon!");
                setLoading(false);
            } else {
                let data = await response.json();
                setErrors(null);
                setData(data);
                setLoading(false);
            }
        }

        fetchData();
    }, [match.params.name, user]);

    if (hasError) {
        return <div className={'error-container'}>{hasError}</div>;
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

export default PokemonPage;
