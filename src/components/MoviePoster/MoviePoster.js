import React from 'react';
import './MoviePoster.css';

function MoviePoster ({ posterImageUrl, size }) {
  return (
    posterImageUrl ? (
      <img className='poster' src={`http://image.tmdb.org/t/p/${size}${posterImageUrl}`} alt='movie poster' />
    ) : (
      <div className='emptyPoster'>
        <span className='emptyPosterLabel'>No image</span>
      </div>
    )
  )
}

export default MoviePoster;
