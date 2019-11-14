import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useInput from "../hooks/inputHook";
import {Link} from "react-router-dom/";

function Search() {
    let input = useInput();
    return (
        <div className={'search-container'}>
            <Form>
                <Form.Control required size="lg" type="text" placeholder="Pokemon's name" className={'search-bar'} {...input}/>
            </Form>
            <Link to={`/pokemon/${input.value}`}>
                <Button variant="warning" type="submit" className={'search-button'}>
                    Search
                </Button>
            </Link>
        </div>
    )
}

export default Search;