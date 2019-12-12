import React, {useContext, useEffect, useState} from "react";
import Loading from "./svg components/Loading";
import UserContext from "./authorization/UserContext";
import Card from "react-bootstrap/Card";
import {Capitalize} from "./PokemonCards";

function FriendCards() {
    const [error, hasError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState({});

    const {user} = useContext(UserContext);

    const token = user ? user.token : " ";
    const username = user ? user.username : " ";


    useEffect(() => {
            async function fetchData() {
                setLoading(true);
                const response = await fetch(`http://localhost:8080/user/name/${username}/friends`, {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                });
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
        }, [token, username]
    );

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (loading) {
        return <Loading/>;
    } else {
        return (
            <div>
                <Friends friends={response}/>
            </div>
        );
    }

    function Friends(props) {
        const friends = props.friends;
        return (
            <div className={"friends"}>
                {friends.map(friend => (
                    <Card bg="light" style={{width: '18rem', justifyContent: 'center', alignItems: 'center'}}
                          key={friend.name}>
                        {/*<Card.Img style={{width:'20vh', height: '20vh'  }} variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />*/}
                        <Card.Header style={{backgroundColor: 'transparent'}}>
                            {Capitalize(friend.name)}
                        </Card.Header>

                    </Card>
                ))}
            </div>
        )

    }
}

export default FriendCards;