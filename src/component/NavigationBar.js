import React, {useContext} from "react";
import {Link} from 'react-router-dom'
import Logo from "./PokeLogo";
import userContext from "./authorization/UserContext";


function NavigationBar() {
    const {user, setUser} = useContext(userContext);

    function LoginOrProfile() {
        if (user) {
            return (
                <Link to={'/profile'} style={{textDecoration: 'none', color: 'yellow'}}>
                    <li> {user.username}'s Profile</li>
                </Link>
            )
        } else {
            return (
                <Link to={'/login'} style={{textDecoration: 'none', color: 'yellow'}}>
                    <li> Login</li>
                </Link>

            )
        }
    }

    function LogoutOrRegister() {
        if (user) {
            return (
                <Link to={'/'} style={{textDecoration: 'none', color: 'yellow'}}>
                    <li onClick={() => {
                        setUser(null);
                        localStorage.removeItem("userObject")
                    }}> Logout
                    </li>
                </Link>
            )
        } else {
            return (
                <Link to={'/register'} style={{textDecoration: 'none', color: 'yellow'}}>
                    <li> Register</li>
                </Link>
            )
        }
    }

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
                    <LoginOrProfile/>
                    <LogoutOrRegister/>
                </ul>
            </nav>
        </div>
    )

}


export default NavigationBar;