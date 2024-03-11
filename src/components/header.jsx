import React from 'react';
import './header.css'; 
import SearchBar  from './searchBar';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }
  return (
    <div className="header">
      <div>
        <a href="/movies">Home</a>
        <a href="/favorites">Favoritos</a>
      </div>
      <div className="search-container">
       <SearchBar/>
      </div>
    </div>
  );
}

export default Header;
