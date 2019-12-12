import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useInput from "../hooks/inputHook";

function Search(props) {
    let input = useInput();
    return (
        <div className={'search-container'}>
            <Form onSubmit={submitHandler}>
                <Form.Control required size="lg" type="text" placeholder="Pokemon's name"
                              className={'search-bar'} {...input}/>
            </Form>
            <Button variant="warning" type="submit" className={'search-button'} onClick={submitHandler}
                    disabled={!validateForm()}>
                Search
            </Button>
        </div>
    );

    function submitHandler(event) {
        event.preventDefault();
        props.history.push(`/pokemon/${input.value}`)
    }

    function validateForm() {
        return input.value.length > 0;
    }
}




export default Search;