import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './home.js'


function App() {
  const initialCharacters = [{name: 'luke'}]
  const [characters, setCharacters] = useState(initialCharacters)
  const getCharacters = function(){
    fetch('http://localhost:4000/api/characters')
    .then(response => response.json())
    .then(data => {
      setCharacters(data)
    })
  }
  useEffect(() => {getCharacters()}, [] )
  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars Universe Lookup</h1>
        <Home />
      </header>
    </div>
  );
}

export default App;
