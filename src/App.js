import React from 'react';
import { NavbarComponent } from './components/navbar';
import './App.css'
import {PokemonList} from './components/contentComponent';

function App() {
  return (
  
      <div className="App">
        <NavbarComponent/>
        <PokemonList/>
      </div>
  );
}

export default App;