import React from 'react';
import { useState, useEffect } from 'react';
import Item from '../components/Item';
import styles from '../App.css';

export default function List() {
  // set state
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const isSearching = !!search.length;
  const noResults = isSearching && !filteredPokemon.length;
  const list = isSearching ? filteredPokemon : pokemonList;

  function handleSearch(e) {
    setSearch(e.target.value);
    const results = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(e.target.value.toLowerCase().trim())
    );
    setFilteredPokemon(results);
    console.log('filteredPokemon', filteredPokemon);
  }

  // useEffect
  useEffect(() => {
    async function getAndSetPokemon() {
      const resp = await fetch(
        'https://pokedex-alchemy.herokuapp.com/api/pokedex'
      );
      const data = await resp.json();
      // console.log('data', data.results);
      setPokemonList(data.results);
      setLoading(false);
    }
    getAndSetPokemon();
  }, []);

  // console.log('pokemonList', pokemonList);

  return (
    <>
      <input
        placholder="Find a Pokemon"
        value={search}
        onChange={handleSearch}
      ></input>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className={styles.list}>
          {list.map((pokemon, i) => (
            <Item key={pokemon.pokemon + i} pokemon={pokemon} />
          ))}
        </div>
      )}
    </>
  );
}
