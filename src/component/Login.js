import React, {useState} from "react";
import {Button, FormControl, FormGroup, FormLabel} from "react-bootstrap";

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:8080/auth/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.status === 404 || responseJson.status === 403) {
                    setError("Incorrect name or password!")
                }
            })
            .catch(reason => {
                console.log(reason);
                setError(true);
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
                        value={username}
                        onChange={e => {
                            setUsername(e.target.value);
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