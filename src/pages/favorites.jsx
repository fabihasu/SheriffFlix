import React, { useState, useEffect } from "react";
import Movies from "../components/movies";

function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const fetchFavoriteMovies = async () => {
        const userId = 1;
        const response = await fetch(`http://localhost:3006/favorites/user/${userId}`);
        const { movieIds } = await response.json();

        const movieDetailsPromises = movieIds.map(async (movieId) => {
            const response = await fetch(`http://localhost:3006/details?movieId=${movieId}`);
            return response.json();
        });

        const movieDetails = await Promise.all(movieDetailsPromises);
        setMovies(movieDetails);
      };

      fetchFavoriteMovies();
    }, []);

    if (movies.length === 0) {
      return <div>Cargando...</div>;
    }

    return (
      <div className="movie-gallery">
        {movies.map((movie, index) => (
          <Movies
            id={movie.id}
            key={index}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            genre={movie.genres.map(genre => genre.name).join(', ')}
            releaseDate={movie.release_date}
            rating={movie.vote_average}
          />
        ))}
      </div>
    );
}

export default Favorites;
