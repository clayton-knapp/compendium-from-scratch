import React from 'react';
import styles from '../App.css';

export default function Item({ pokemon }) {
  return (
    <div
      className={styles['item']}
      style={{ backgroundColor: pokemon.color_1 }}
    >
      <h2 aria-label="name">{pokemon.pokemon}</h2>
      <img src={pokemon.url_image} alt="pokemon" />
    </div>
  );
}
