import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbo from '../component/Jumbotron'
import NavigationBar from "../component/NavigationBar";
import DataContainer from "../component/PokemonDataContainer";


function App() {
  return (
    <div className="App">
        <Jumbo/>
        <NavigationBar/>
        <DataContainer/>
    </div>
  );
}

export default App;
