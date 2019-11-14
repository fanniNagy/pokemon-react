import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "../component/NavigationBar";
import PokemonPage from '../component/PokemonPage'
import DataContainer from "../component/PokemonDataContainer";
import Search from "../component/Search";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
    return (
        <Router>
            <div className="App">
                <NavigationBar/>
                <Switch>
                    <Route path='/' exact component={DataContainer}/>
                    <Route path='/search' component={Search}/>
                    <Route path='/pokemon/:name' component={PokemonPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
