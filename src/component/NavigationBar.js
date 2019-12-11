import React from "react";
import {Link} from 'react-router-dom'
import Logo from "./PokeLogo";


function NavigationBar() {
    return (

        <div className={"header"}>
            <Logo/>
            <nav className={'navigation-bar'}>
                <ul className={'nav-links'}>
                    <Link to={'/'} style={{textDecoration: 'none', color: 'yellow'}}>
                        <li>All Pokemons</li>
                    </Link>
                    <Link to={'/search'} style={{textDecoration: 'none', color: 'yellow'}}>
                        <li>Search Pokemon</li>
                    </Link>
                    <Link to={'/profile'} style={{textDecoration: 'none', color: 'yellow'}}>
                        <li> Profile</li>
                    </Link>
                    <Link to={'/login'} style={{textDecoration: 'none', color: 'yellow'}}>
                        <li> Login</li>
                    </Link>
                    <Link to={'/register'} style={{textDecoration: 'none', color: 'yellow'}}>
                        <li> Register</li>
                    </Link>
                    <Link to={'/'} style={{textDecoration: 'none', color: 'yellow'}}>
                        <li> Logout</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )

}

export default NavigationBar;