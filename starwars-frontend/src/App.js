import React, {useState, useEffect} from 'react';
import './App.css';


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
        <h2>This is a test</h2>
        <ul>
          {characters.map(
            (characters, index) => {
              return <li key ={index} >
                {characters.name}
              </li>
            }

          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
