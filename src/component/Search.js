import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Search() {
    return (
        <div className={'search-container'}>
            <Form>
                <Form.Control size="lg" type="text" placeholder="Pokemon's name" className={'search-bar'}/>
            </Form>
            <Button variant="warning" type="submit" className={'search-button'}>
                Search
            </Button>
        </div>
    )
}

export default Search;