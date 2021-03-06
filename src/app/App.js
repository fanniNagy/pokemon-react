import React, {useMemo, useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "../component/NavigationBar";
import PokemonPage from '../component/PokemonPage'
import DataContainer from "../component/PokemonDataContainer";
import Search from "../component/Search";
import User from "../component/UserPage";
import UserPage from "../component/UserPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "../component/Login";
import UserContext from "../component/authorization/UserContext"
import Registration from "../component/Registration";
import IVCalculatorContainer from "../component/IVCalculatorPage";
import UserBanCardContainer from "../component/UserBanCardContainer";


function App() {
    const [user, setUser] = useState(() =>
        (localStorage.getItem("userObject") !== null) ?
            JSON.parse(localStorage.getItem("userObject")) : null);
    const userValue = useMemo(() => ({user, setUser}), [user, setUser]);

    return (
        <Router>
            <UserContext.Provider value={userValue}>
                <div className="App">
                    <NavigationBar/>
                    <Switch>
                        <Route path='/' exact component={DataContainer}/>
                        <Route path='/search' component={Search}/>
                        <Route path='/pokemon/:name' component={PokemonPage}/>
                        <Route path='/profile' exact component={UserPage}/>
                        <Route path='/login' exact component={Login}/>
                        <Route path='/register' exact component={Registration}/>
                        <Route path='/ivcalculator' exact component={IVCalculatorContainer}/>
                        <Route path='/admin/ban' exact component={UserBanCardContainer} />
                    </Switch>
                </div>
            </UserContext.Provider>
        </Router>
    );
}

export default App;
