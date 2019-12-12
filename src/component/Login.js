import React, {useContext, useState} from "react";
import {Button, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {userContext} from "./authorization/UserContext";

export default function Login(props) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const {setUser} = useContext(userContext);

    function validateForm() {
        return name.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:8080/auth/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "username": name,
                "password": password
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status === 404 || responseJson.status === 403) {
                    setError("Incorrect name or password!")
                } else {
                    setUser(responseJson);
                    props.history.push("/");
                }
            })
            .catch(reason => {
                console.log(reason);
                setError(reason.message);
            })
    }

    return (
        <div className="login-container">
            {(error !== null) ?
                <div style={{'color': 'red'}}><FormLabel>{error}</FormLabel></div> : null}
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        autoFocus
                        value={name}
                        onChange={e => {
                            setName(e.target.value);
                        }}
                    />
                </FormGroup>
                <FormGroup controlId="password">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                        type="password"
                    />
                </FormGroup>
                <Button block disabled={!validateForm()} type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}