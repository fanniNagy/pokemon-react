import React, {useState, useEffect, useContext} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import userContext from "./authorization/UserContext";
import {FormControl, FormGroup, FormLabel} from "react-bootstrap";

const IVCalculatorContainer = () => {
    const {user} = useContext(userContext);
    const [hp, setHp] = useState(0);
    const [attack, setAttack] = useState(0);
    const [defense, setDefense] = useState(0);
    const [iv, setIv] = useState(0);
    const ivValues = {
        hp: hp,
        attack: attack,
        defense: defense,
    };

    const calculate = async () => {
        const token = user ? user.token : null;
        await fetch("http://localhost:8080/ivcalculator", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                "hp": hp,
                "attack": attack,
                "defense": defense
            })
        }).then(response => response.json())
            .then(data => {
                setIv(data)
            })
    };
    return (
        <div>
            <form>
                <div className="login-container">
                    <form onSubmit={calculate}>
                        <FormGroup controlId="hp">
                            <FormLabel>Hp</FormLabel>
                            <FormControl autoFocus onChange={event => setHp(event.target.value)}
                                         type="hp"/>
                        </FormGroup>
                        <FormGroup controlId="attack">
                            <FormLabel>Attack</FormLabel>
                            <FormControl
                                autoFocus onChange={event => setAttack(event.target.value)}
                                type="attack"/>
                        </FormGroup>
                        <FormGroup controlId="defense">
                            <FormLabel>Defense</FormLabel>
                            <FormControl autoFocus onChange={event => setDefense(event.target.value)}
                                         type="defense"/>
                        </FormGroup>
                        <Button
                            onClick={calculate}
                            variant="outline-danger">
                            Calculate IV
                        </Button>
                    </form>
                </div>
            </form>
            <div style={{width: '7rem', height: '7rem', alignSelf: 'center', marginLeft:'auto', marginRight:'auto', marginTop:'2rem'}}>
                <Card bg="light" style={{width: '7rem', height: '7rem', justifyContent: 'center', alignSelf: 'center'}}>
                    {iv}
                </Card>
            </div>
            </div>
            )
            };

            export default IVCalculatorContainer;