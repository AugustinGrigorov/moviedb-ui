import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResult.css';
import MoviePoster from '../MoviePoster';

function SearchResult({ details, closeResults }) {
  return (
    <li className="searchResult">
      <Link to={`/display/${details.id}`} onClick={closeResults}>
        <MoviePoster posterImageUrl={details.poster_path} size="w92" />
        <div className="movieDetails">
          <h3 className="movieTitle">{details.title}</h3>
          <p className="movieOverview">{shortenText(details.overview)}</p>
        </div>
      </Link>
    </li>
  );
}

function shortenText(details) {
  if (details.length < 300) {
    return details;
  } else {
    return `${details.substring(0, 300)}...`;
  }
}

export default SearchResult;
