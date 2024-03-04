import React from 'react';
import './movies.css';


function Movies({ src, title, releaseDate, rating }) {
  return (
    <div className="movie">
      <img src={src} alt={title} />
      <h3>{title}</h3>
      <p>Data de Lançamento: {releaseDate}</p>
      <p>Classificação: {rating ? `${rating}/10` : 'Não avaliado'}</p>
      {}
    </div>
  );
}

export default Movies;

