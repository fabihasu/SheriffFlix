import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import Movies from './components/movies';


function MoviesList() {
  const [dados, setDados] = useState(null);
  let title = ""
  useEffect(() => {
    const buscarDados = async () => {
      const resposta = await fetch('http://localhost:3005/movies')
      const dados = await resposta.json();
      setDados(dados.results);
    };

    buscarDados();
  }, []); 

  if (!dados || dados.length === 0) {
    return <div>Carregando...</div>; 
  }

  return (
    <div>
      <Header />
      <div className="movie-gallery">
        {dados.map((movie, index) => (
          <Movies 
          key={index}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title={movie.title}
          releaseDate={movie.release_date}
          rating={movie.vote_average} 
          />
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
