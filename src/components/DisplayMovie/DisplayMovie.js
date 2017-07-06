import React, { Component } from 'react';
import { getMovieDetails } from '../../util/apiHandler'
import Spinner from '../Spinner'
import './DisplayMovie.css';

//  TODO: Display more content

class DisplayMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: {},
      movieDetailsLoaded: false
    };
  }

  componentDidMount () {
    getMovieDetails(this.props.match.params.id).then((details) => {
      this.setState({
        movieDetails: details,
        movieDetailsLoaded: true
      });
    })
  }

  render () {
    return (
      <div>
        {this.state.movieDetailsLoaded ? <MovieView details={this.state.movieDetails} /> : <Spinner />}
      </div>
    )
  }
}

function MovieView ({ details }) {
  return (
    <div>
      <h1 className='title'>{details.original_title}</h1>
      <div className='genres'>{details.genres.map((genre) => {
        return <p className='genre' key={genre.id}>{genre.name}</p>
      })}</div>
      <img className='poster' alt='Movie poster' src={`http://image.tmdb.org/t/p/w185${details.poster_path}`} />
      <p className='descripton'>{details.overview}</p>
    </div>
  )
}

export default DisplayMovie
