import React from 'react';
import styles from '../App.css';

export default function Item({ pokemon }) {
  return (
    <div className={styles['item']} style={{ backgroundColor: pokemon.color_1 }}>
      <h2>{pokemon.pokemon}</h2>
      <h3>Type: {pokemon.type_1}</h3>
      <img src={pokemon.url_image} alt="pokemon" />
    </div>
  );
}
