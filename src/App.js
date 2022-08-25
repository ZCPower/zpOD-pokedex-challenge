import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './Styles/App.css';
import {
  SearchForm, SinglePokemon, Header, Favorites
} from './Components'
import { fetchPokemonByName } from './FETCHREQUESTS/api';

function App() {
  const favoritesFromStorage = localStorage.getItem('favorites')
  const parsedFavorites = favoritesFromStorage ? JSON.stringify(favoritesFromStorage) : [];

  const [pokemon, setPokemon] = useState()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [favorites, setFavorites] = useState(parsedFavorites);


  const getPokemon = async (query) => {
    if (!query) setError(true)
    else {
      setError(false)
      setLoading(true)
      // console.log(pokemon, 'pokemon')
      const response = await fetchPokemonByName(query);
      setPokemon(response)
      setLoading(false)
    }
  }

  function handleAddToFavorites(e) {
    e.preventDefault()
    setFavorites([...favorites, pokemon])
    console.log(favorites)
    // localStorage.setItem('favorites', JSON.stringify(favorites))
    // when this is in the code, it sends back a massive array with random characters. if there was more time I would debug this. 
  }


  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <SearchForm getPokemon={getPokemon} />
            {!loading && pokemon ?
              <SinglePokemon
                name={pokemon.name}
                sprite={pokemon.sprites.front_default}
                abilities={pokemon.abilities}
                stats={pokemon.stats}
                types={pokemon.types}
                species={pokemon.species}
                handleAddToFavorites={handleAddToFavorites}
              />
              : <h4 className='searchError'>Please enter a valid Pokemon name!</h4>}
          </Route>
          <Route path='/favorites'>
            <Favorites favorites={favorites} setFavorites={setFavorites} />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;


/*
 Use PokeAPI to: 
 use localStorage for data to persist. nope.



 Provide an action within the favorites display that when individually interacted with, display the favorited entry.  

Clear, simple code that is self-descriptive
Comments when applicable
Clear, clean, responsive styling

Deliverables
Please send us back a link to a git repo with the completed code challenge.

Include a README.md file in your repo. This should include build instructions and gotchas you have run across that another dev would need to get the app running quickly.
*/