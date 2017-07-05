import React, { Component } from 'react';
import { getMovieDetails } from '../../util/apiHandler'

class DisplayMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: {}
    };
  }

  componentDidMount () {
    getMovieDetails(this.props.match.params.id).then((details) => {
      this.setState({
        movieDetails: details
      });
    })
  }

  render () {
    return (
      <div>
        <h1>{this.state.movieDetails.original_title}</h1>
        <p>{this.state.movieDetails.overview}</p>
      </div>
    )
  }
}

export default DisplayMovie
