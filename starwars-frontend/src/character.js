import React, {useState, useEffect} from 'react';
import './App.css';

function character(){
    const initialCharacters = [{name: 'luke'}]
    const [characters, setCharacters] = useState(initialCharacters)
    const getCharacters = function(){
    fetch('http://localhost:4000/api/characters/:id')
    .then(response => response.json())
    .then(data => {
      setCharacters(data)
    })
  }
    return
}
export default character;