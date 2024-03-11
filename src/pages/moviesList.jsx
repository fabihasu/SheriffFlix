import React,{useState,useEffect} from "react";
import Movies from "../components/movies";
import "./PaginationButtons.css";

function MoviesList() {
    const [dados, setDados] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
      const buscarDados = async () => {
        const resposta = await fetch(`http://localhost:3006/movies?page=${currentPage}`)
        const dados = await resposta.json();
        setDados(dados.results);
      };
  
      buscarDados();
    }, [currentPage]); 
  
    const handleNextPage = () => {
      setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
    };
  
    const handlePreviousPage = () => {
      setCurrentPage((prevCurrentPage) => Math.max(prevCurrentPage - 1, 1));
    };

    if (!dados || dados.length === 0) {
      return <div>Cargando...</div>; 
    } 
  
    return (
      <div>
        <div className="pagination-container">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="pagination-btn btn-previous"
          > Anterior 
          </button>
          <button
            onClick={handleNextPage}
            className="pagination-btn btn-next"
          > Siguiente 
          </button>
        </div>
        <div className="movie-gallery">
          {dados.map((movie, index) => (
            <Movies 
            id= {movie.id}
            key={index}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            genre={movie.genre_ids}
            releaseDate={movie.release_date}
            rating={movie.vote_average} 
            />
          ))}
        </div>
        <div className="pagination-container">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="pagination-btn btn-previous"
          > Anterior 
          </button>
          <button
            onClick={handleNextPage}
            className="pagination-btn btn-next"
          > Siguiente 
          </button>
        </div>
      </div>
    );
  }
  
  
  export default MoviesList;
  