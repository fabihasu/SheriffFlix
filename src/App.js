import React from 'react';
import './App.css';
import Header from './components/header';
import Movies from './components/movies';

function MoviesList() {
  const moviesData = new Array(20).fill({
    src: '/imagens/afiche-pobres-criaturas.jpeg', 
    title: 'Nombre de la Película' 
  });

  return (
    <div>
      <Header />
      <div className="movie-gallery">
        {moviesData.map((movie, index) => (
          <Movies key={index} src={movie.src} title={movie.title} />
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
