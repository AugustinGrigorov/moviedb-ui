import React, { Component } from 'react';
import { getMovieDetails } from '../../util/apiHandler'
import Spinner from '../Spinner'
import MoviePoster from '../MoviePoster';
import './DisplayMovie.css';

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

  componentWillReceiveProps (nextProps) {
    getMovieDetails(nextProps.match.params.id).then((details) => {
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
    <div className='movieView'>
      <h1 className='title'>{details.original_title}</h1>
      <div className='genres'>{details.genres.map((genre) => {
        return <p className='genre' key={genre.id}>{genre.name}</p>
      })}</div>
      <MoviePoster posterImageUrl={details.poster_path} size='w342' />
      <p className='descripton'>{details.overview}</p>
    </div>
  )
}

export default DisplayMovie
