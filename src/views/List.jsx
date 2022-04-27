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
  // const list = isSearching ? filteredPokemon : pokemonList;

  function handleSearch(e) {
    setSearch(e.target.value);
    const results = pokemonList.filter(({ pokemon }) =>
      pokemon.toLowerCase().startsWith(e.target.value.toLowerCase().trim())
    );
    setFilteredPokemon(results);
    // console.log('filteredPokemon', filteredPokemon);
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
        placeholder="Find a Pokemon"
        value={search}
        // onChange={(e) => {
        //   handleSearch(e);
        // }}
        onChange={handleSearch}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.list}>
          {(isSearching ? filteredPokemon : pokemonList).map((pokemon) => (
            <Item key={pokemon.pokemon} pokemon={pokemon} />
          ))}
        </div>
      )}
      {noResults && <p>No Results</p>}
    </>
  );
}
