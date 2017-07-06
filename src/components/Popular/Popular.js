import React, { Component } from 'react';
import './Popular.css';
import PopularMovie from './PopularMovie'
import { getPopularMovies } from '../../util/apiHandler'

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularMovies: []
    };
  }

  componentDidMount () {
    getPopularMovies().then((popularMovies) => {
      this.setState({
        popularMovies
      });
    })
  }

  render () {
    return (
      <div className='popular'>
        {this.state.popularMovies.map((result) => {
          return <PopularMovie key={result.id} details={result} />;
        })}
      </div>
    );
  }
}

export default Popular;
