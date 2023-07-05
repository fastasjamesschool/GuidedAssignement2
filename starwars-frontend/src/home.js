import React, {useState, useEffect} from 'react';
import './App.css';

function Home() {
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
    return(
        <section id="charactersList">
          {characters.map(
            (characters, index) => {
              return <div key ={index} >
                {characters.name}
              </div>
            }

          )}

        </section>
      )
}
export default Home;