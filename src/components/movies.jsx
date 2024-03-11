import React from 'react';
import { Link } from 'react-router-dom';
import './movies.css';


function Movies({ id, src, title,releaseDate, rating }) {
  return (
    <div className="movie">
      <Link to={`/movies/${id}`}>
      <img src={src} alt={title} />
      <h3>{title}</h3>
      <p>Fecha de lanzamiento: {releaseDate}</p>
      <p>Clasificación: {rating ? `${rating}/10` : 'No evaluado'}</p>
      </Link>
  
      {}
    </div>
  );
}

export default Movies;

