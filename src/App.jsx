import React from 'react';
import {Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header';
import MoviesList from './pages/moviesList';
import SearchResults from './pages/searchResults';
import MovieDetails from './pages/movieDetails';
import Favorites from './pages/favorites';


function App() {
  return (
    <>
      <Header />
      <Routes>
       <Route path="/" element={<MoviesList />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/movies/:id" element={<MovieDetails />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
      </>
  );
}

export default App;
