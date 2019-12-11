import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "../component/NavigationBar";
import PokemonPage from '../component/PokemonPage'
import DataContainer from "../component/PokemonDataContainer";
import Search from "../component/Search";
import User from "../component/UserPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "../component/Login";


function App() {
    return (
        <Router>
            <div className="App">
                <NavigationBar/>
                <Switch>
                    <Route path='/' exact component={DataContainer}/>
                    <Route path='/search' component={Search}/>
                    <Route path='/pokemon/:name' component={PokemonPage}/>
                    <Route path='/profile' exact component={User}/>
                    <Route path='/login' exact component={Login}/>
                    <Route path='/register' exact component={User}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
