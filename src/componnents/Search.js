import React, { Component } from 'react';
import './Search.css';
import searchForMovie from '../util/apiHandler'


class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      results: []
    };
  }

  updateSearch = (event) => {
    searchForMovie(event.target.value).then((results) => {
      this.setState({
        results: results
      });
    })
    this.setState({
      search: event.target.value
    });
   }

  render() {
    return (
      <div className="search">
        <input className="searchBar" type="search" name="movie_search" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
        <ul>
          {this.state.results.map(function(result){
            return <li key={result.id}>{result.original_title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Search;
