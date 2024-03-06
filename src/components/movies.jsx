import React from 'react';
import { Link } from 'react-router-dom';
import './movies.css';


function Movies({ id, src, title, genre,releaseDate, rating }) {
  return (
    <div className="movie">
      <Link to={`/movies/${id}`}>
      <img src={src} alt={title} />
      <h3>{title}</h3>
      <p>Genero: {genre}</p>
      <p>Data de Lançamento: {releaseDate}</p>
      <p>Classificação: {rating ? `${rating}/10` : 'Não avaliado'}</p>
      </Link>
  
      {}
    </div>
  );
}

export default Movies;

