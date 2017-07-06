import React from 'react';
import './SearchBar.css';



function SearchBar (props) {
  return (
    <input className='searchBar' type='search' name='movie_search' onChange={props.updateSearch}/>
  )
}

export default SearchBar;
