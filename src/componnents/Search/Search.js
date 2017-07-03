import React, { Component } from 'react';
import './Search.css';
import searchForMovie from '../../util/apiHandler'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };

    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch = (event) => {
    searchForMovie(event.target.value).then((results) => {
      this.setState({
        results: results
      });
    })
   }

  render() {
    return (
      <div className="search">
        <SearchBar updateSearch={this.updateSearch} />
        <ul>
          {this.state.results.map((result) => {
            return <SearchResult key={result.id} title={result.original_title} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Search;
