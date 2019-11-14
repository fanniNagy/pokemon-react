import React from "react";
import {Link} from 'react-router-dom'

function NavigationBar() {
    return (
        <nav className={'navigation-bar'}>
            <ul className={'nav-links'}>
                <Link to={'/'} style={{textDecoration: 'none', color: 'yellow'}}>
                    <li>All Pokemons</li>
                </Link>
                <Link to={'/search'} style={{textDecoration: 'none', color: 'yellow'}}>
                    <li>Search Pokemon</li>
                </Link>
                <li>Login</li>
                <li>Register</li>
            </ul>
        </nav>
    )

}

export default NavigationBar;