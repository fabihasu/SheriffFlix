import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Movies from "../components/movies";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('query');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchMovies = async () => {
      if (searchTerm) {
        setIsLoading(true);
        setError(null); 
        try {
          const response = await fetch(`http://localhost:3006/search?query=${searchTerm}`);
          if (!response.ok) {
            throw new Error(`Erro: ${response.status}`); 
          }
          const data = await response.json();
          setMovies(data.results); 
        } catch (error) {
          setError(error.message); 
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchMovies();
  }, [searchTerm]);

  return (
    <div>
      {isLoading && <div>Carregando...</div>}
      {error && <div>{error}</div>}
      {!isLoading && !error && movies &&
            <div className="movie-gallery">
              {movies.map((movie, index) => (
                <Movies 
                key={index}
                id={movie.id}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.title}
                genre={movie.genre_ids}
                releaseDate={movie.release_date}
                rating={movie.vote_average} 
                />
              ))}
            </div>
    }
    </div>
  );
}

export default SearchResults;
