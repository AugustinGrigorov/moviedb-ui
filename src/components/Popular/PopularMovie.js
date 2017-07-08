import React from 'react';
import { Link } from 'react-router-dom';
import './PopularMovie.css';
import MoviePoster from '../MoviePoster';

function PopularMovie({ details }) {
  return (
    <div className="popularMovie">
      <Link to={`/display/${details.id}`}>
        <MoviePoster posterImageUrl={details.poster_path} size="w185" />
        <h3 className="movieTitle">{details.title}</h3>
      </Link>
    </div>
  );
}

export default PopularMovie;
