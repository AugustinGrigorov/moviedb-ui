import React from 'react';
import './SearchBar.css';

function SearchBar({ updateSearch, handleEscape }) {
  return (
    <input className="searchBar" type="search" name="movie_search" placeholder="Search for movies here..." onChange={updateSearch} onKeyPress={handleEscape} />
  );
}

export default SearchBar;
