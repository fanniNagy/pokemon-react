import React, {useContext, useEffect, useState} from "react";
import Loading from "./svg components/Loading";
import UserContext from "./authorization/UserContext";
import Card from "react-bootstrap/Card";
import {Capitalize} from "./PokemonCards";
import FriendRequest from "./FriendRequest";


function PendingFriendCards({reload, setReload}) {
    const [error, hasError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState([]);
    const {user} = useContext(UserContext);

    const token = user ? user.token : " ";
    const username = user ? user.username : " ";

    useEffect(() => {
            async function fetchData() {
                setLoading(true);
                const response = await fetch(`http://localhost:8080/user/name/${username}/requests`, {
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
        }, [token, username, reload]
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

    function acceptFriendship(friendName) {
        async function fetchData() {
            const response = await fetch(`http://localhost:8080/user/friend/${username}/accept-friend/${friendName}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                credentials: "same-origin"
            });
            if (response.status === 404 || response.status === 403) {
                console.log(response);
            } else {
                console.log(response);
                setReload(!reload);
            }
        }

        fetchData();
    }

    function PendingFriends(props) {
        const friends = props.friends;
        return (<div className={"friends"} style={{display: "block"}}>
            {friends.map(friend => (
                <Card bg="secondary" style={{width: '8rem', justifyContent: 'center', alignItems: 'center'}}
                      key={friend.name} onClick={() => acceptFriendship(friend.name)}>
                    <Card.Header style={{backgroundColor: 'transparent'}}>
                        {Capitalize(friend.name)}
                    </Card.Header>
                </Card>
            ))}
        </div>);
    }

    function Friends(props) {
        const friends = props.friends;
        console.log(friends);
        return (
            <div>
                <div style={{display: "block"}}>
                    <FriendRequest token={token} username={username}/>
                </div>
                <PendingFriends{...props}/>
            </div>
        )
    }
}

export default PendingFriendCards;