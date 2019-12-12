import React, {useState} from "react";
import {Button, FormControl, FormGroup, FormLabel} from "react-bootstrap";

export default function Registration(props) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [error, setError] = useState(null);

    function validateForm() {
        return name.length > 0 && password.length > 0 && secondPassword.length > 0 && email.length > 0 && password === secondPassword;
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:8080/registration',
            {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "name": name,
                    "password": password,
                    "email": email
                })
            }).then((responseJson) => {
            console.log(responseJson);
            if (responseJson.status === 404 || responseJson.status === 403) {
                setError("Something went wrong!")
            } else if (responseJson.status === 409) {
                setError("Username already taken!")
            } else {
                props.history.push("/login")
            }
        })
            .catch(reason => {
                setError(reason.message);
            })
    }

    return (
        <div className="login-container">
            {(error !== null) ?
                <div style={{'color': 'red'}}><FormLabel>{error}</FormLabel></div> : null}
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="username">
                    <FormLabel>Username</FormLabel>
                    <FormControl
                        autoFocus
                        value={name}
                        onChange={e => {
                            setName(e.target.value);
                        }}
                    />
                </FormGroup>
                <FormGroup controlId="email">
                    <FormLabel>E-mail</FormLabel>
                    <FormControl
                        autoFocus
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value);
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
                <FormGroup controlId="second-password">
                    <FormLabel>Password again</FormLabel>
                    <FormControl
                        value={secondPassword}
                        onChange={e => {
                            setSecondPassword(e.target.value);
                        }}
                        type="password"
                    />
                </FormGroup>
                <Button block disabled={!validateForm()} type="submit">
                    Register
                </Button>
            </form>
        </div>
    );
}