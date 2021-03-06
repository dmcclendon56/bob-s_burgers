import './App.css';
import Characters from './componets/Characters';
import CharacterList from './pages/CharacterList';
import { Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import SearchBar from './componets/SearchBar';
import CharacterData from './bobsBurgersList.json'
import Header from './componets/Header';
import CharactersList from './pages/CharactersList';
import About from './pages/About';

function App(props) {
  const [character, setCharacter] = useState(null)

    function getCharacter(){
        fetch('https://bobsburgers-api.herokuapp.com/characters/')
        .then((res)=> res.json())
        .then((res) => setCharacter(res))
          
          // .catch(console.error)

    }
    useEffect(() => {
        getCharacter();
    }, [])
  return (
    <div>
    <Header />
      <SearchBar placeholder="Enter a character name..." data={CharacterData} />
    <Routes>
    <Route exact path="/characterslist" element= {<CharactersList character={character}/>}/>
    <Route exact path="/about" element= {<About />}/>
    <Route exact path='/' element= {<Characters character={character}  />} />
    <Route path='/:index' element= {<CharacterList character={character}/>} />
    </Routes>
    </div>
  );
}

export default App;


// itemsPerPage = {6}