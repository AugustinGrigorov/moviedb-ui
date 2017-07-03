import React from 'react';
import './SearchResult.css';



function SearchResult (props) {
  return (
    <li className="searchResult">{props.title}</li>
  )
}

export default SearchResult;
