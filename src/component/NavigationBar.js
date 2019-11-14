import React from "react";
import {Link} from 'react-router-dom'
import Jumbo from "./Jumbotron";


function NavigationBar() {
    return (
        <div className={"header"}>
            <Jumbo/>
            <nav className={'navigation-bar'}>
                <ul className={'nav-links'}>
                    <Link to={'/'} style={{textDecoration: 'none', color: 'yellow'}}>
                        <li>All Pokemons</li>
                    </Link>
                    <Link to={'/search'} style={{textDecoration: 'none', color: 'yellow'}}>
                        <li>Search Pokemon</li>
                    </Link>
                    {/*<li>Login</li>*/}
                    {/*<li>Register</li>*/}
                </ul>
            </nav>
        </div>
    )

}

export default NavigationBar;