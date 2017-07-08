import React from 'react';
import './PopularMovie.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import MoviePoster from '../MoviePoster';

function PopularMovie ({ details }) {
  return (
    <div className='popularMovie'>
      <Router>
        <Link to= {`/display/${details.id}`}>
          <MoviePoster posterImageUrl={details.poster_path} size='w185' />
          <h3 className='movieTitle'>{details.title}</h3>
        </Link>
      </Router>
    </div>
  )
}

export default PopularMovie;
