import React from 'react';
import './movies.css';


function Movies({ title }) {
  return (
    <div className="movie">
      <img src="/imagens/afiche-pobres-criaturas.jpeg" alt="Movie Placeholder" />
      <h3>{title}</h3>
      {}
    </div>
  );
}

export default Movies;

