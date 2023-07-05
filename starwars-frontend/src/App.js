import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './home.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars Universe Lookup</h1>
        <Home />
        <Route path="/characters/:id"></Route>
      </header>
    </div>
  );
}

export default App;
