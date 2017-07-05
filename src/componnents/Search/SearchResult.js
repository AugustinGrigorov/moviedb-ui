import React from 'react';
import './SearchResult.css';
import { Link } from 'react-router-dom'

function SearchResult (props) {
  return (
    <li className="searchResult">
      <Link to= {`/display/${props.id}`}>
        {props.title}
      </Link>
    </li>
  )
}

export default SearchResult;
