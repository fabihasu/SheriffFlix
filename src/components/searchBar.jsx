import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/search?query=${input}`);
    };

    const handleChange = (event) => {
        setInput(event.target.value);
    };
  
    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Buscar filmes..."
            value={input}
            onChange={handleChange}
          />
          <button type="submit">Buscar</button>
        </form>
    );
}

export default SearchBar;
