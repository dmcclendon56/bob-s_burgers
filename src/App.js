import './App.css';
import Characters from './componets/Characters';
import { Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

function App(props) {
  const [character, setCharacter] = useState(null)

    function getCharacter(){
        fetch('https://bobsburgers-api.herokuapp.com/characters/')
        .then((res)=> res.json())
        .then((res) => setCharacter(res.results))
          
          .catch(console.error)

    }
    useEffect(() => {
        getCharacter();
    }, [])
  return (
    <Routes>
    <Route exact path='/' element= {<Characters character={character}/>} />
    <Route exact path='/:index' element= {<Characters character={character}/>} />
    </Routes>
    
  );
}

export default App;
