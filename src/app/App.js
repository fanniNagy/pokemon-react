import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbo from '../component/Jumbotron'
import NavigationBar from "../component/NavigationBar";
import DataContainer from "../component/PokemonDataContainer";
import Search from "../component/Search";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
    return (
        <Router>
            <div className="App">
                <Jumbo/>
                <NavigationBar/>
                <Switch>
                    <Route path='/' exact component={DataContainer}/>
                    <Route path='/search' component={Search}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
