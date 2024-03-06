import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './movieDetails.css'; 
import FavoriteButton from './favoritesButton';


function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  }

useEffect(() => {
  const fetchMovie = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3006/details?movieId=${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  fetchMovie();
}, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movie) return <div>No movie data!</div>;

  const genres = movie.genres.map(genre => genre.name).join(', ');

  const productionCompanies = movie.production_companies.map(pc => pc.name).join(', ');

return (
        <div className="page-container">
          <div className="movie-content">
            <div className="movie-image">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster of ${movie.title}`} />
            </div>
            <div className="movie-details">
              <h1 className="movie-title">{movie.title}</h1>
              <p><strong>Sinopse:</strong> {movie.overview}</p>
              <p className="release-date"><strong>Data de Lançamento:</strong> {movie.release_date}</p>
              <p><strong>Gêneros:</strong> {genres}</p> 
              <p className="vote-average"><strong>Calificações:</strong> {movie.vote_average}</p>
              <p><strong>Empresas de Produção:</strong> {productionCompanies}</p>
            
            </div>
          </div>
          <FavoriteButton isFavorite={isFavorite} onClick={toggleFavorite} />
        </div>
      );
  
}

export default MovieDetails;
