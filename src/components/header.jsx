import React from 'react';
import './header.css'; 
import SearchBar  from './searchBar';

function Header() {
  return (
    <div className="header">
      <div>
        <a href="/">Home</a>
        <a href="/favorites">Favoritos</a>
      </div>
      <div className="search-container">
       <SearchBar/>
      </div>
    </div>
  );
}

export default Header;
