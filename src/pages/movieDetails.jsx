import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './movieDetails.css'; 
import FavoriteButton from '../components/favoritesButton';


function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = async () => {
    const method = isFavorite ? 'DELETE' : 'POST';
    const endpoint = isFavorite ? 'remove' : 'add';
  
    try {
      const response = await fetch(`http://localhost:3006/favorites/${endpoint}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: '1',
          movieId: id,
        }),
      });

      if (!response.ok) {
        throw new Error('Error conexión');
      }

      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:3006/details?movieId=${id}`);
        if (!response.ok) {
          throw new Error('Error conexión');
        }
        const data = await response.json();
        setMovie(data);

        const favoriteResponse = await fetch(`http://localhost:3006/favorites/check?userId=1&movieId=${id}`);
        if (!favoriteResponse.ok) {
          throw new Error('Error conexión');
        }
        const favoriteData = await favoriteResponse.json();
        setIsFavorite(favoriteData.isFavorite);

      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movie) return <div>Sin informacion de la película!</div>;

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
              <p><strong>Sinopsis:</strong> {movie.overview}</p>
              <p className="release-date"><strong>Fecha de lanzamiento:</strong> {movie.release_date}</p>
              <p><strong>Géneros:</strong> {genres}</p> 
              <p className="vote-average"><strong>Calificaciones:</strong> {movie.vote_average}</p>
              <p><strong>Empresas de Producción:</strong> {productionCompanies}</p>
              <FavoriteButton isFavorite={isFavorite} onClick={toggleFavorite} />
            </div>
          </div>
         
        </div>
      );
  
}

export default MovieDetails;
