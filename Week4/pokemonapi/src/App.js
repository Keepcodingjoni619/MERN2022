import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios
    .get('https://pokeapi.co/api/v2/pokemon?offset=119&limit=345')
    .then((res) => {
      console.log('Pokemon Data', res.data.results);
      setPokemon(res.data.results)
    })
    .catch(err => console.err('Error with Axios', ))
  }, []);

  return (
    <div className="App">
      <ul>
        <button>Fetch Pokemon</button>
      {
        pokemon.map((poke, index) => (
          <li key={index}>
            <h2>{poke.name}</h2>
          </li>
        ))
      }

      </ul>
      
    </div>
  );
}

export default App;
