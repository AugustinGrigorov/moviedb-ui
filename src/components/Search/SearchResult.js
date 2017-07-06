import React from 'react';
import './SearchResult.css';
import { Link } from 'react-router-dom'

//  TODO: Limit descripton characters
//  TODO: Decouple image logic

function SearchResult ({ details }) {
  return (
    <li className='searchResult'>
      <Link to= {`/display/${details.id}`}>
        {details.poster_path ? (
          <img className='searchPoster' src={`http://image.tmdb.org/t/p/w92${details.poster_path}`} alt='movie poster' />
        ) : (
          <div className='searchEmptyPoster'>
            <span className='emptyPosterLabel'>No image</span>
          </div>
        )}
        <div className='movieDetails'>
          <h3 className='movieTitle'>{details.title}</h3>
          <p className='movieOverview'>{details.overview}</p>
        </div>
      </Link>
    </li>
  )
}

export default SearchResult;
