import React from 'react';
import './header.css'; 

function Header() {
  return (
    <div className="header">
      <div>
        <a href="/">Home</a>
        <a href="/favorites">Favoritos</a>
      </div>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Buscar filmes..." />
        <button className="search-button">Buscar</button>
      </div>
    </div>
  );
}

export default Header;
