import React, { Component } from 'react';
import './Search.css';
import { searchForMovie } from '../../util/apiHandler'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.closeResults = this.closeResults.bind(this);
  }

  updateSearch = (event) => {
    searchForMovie(event.target.value).then((results) => {
      this.setState({
        results: results
      });
    })
  }

   closeResults = () => {
     this.setState({
       results: []
     });
   }

  render () {
    return (
      <div className='search'>
        <SearchBar updateSearch={this.updateSearch} />
        <ul className='searchResults'>
          {this.state.results.map((result) => {
            return <SearchResult key={result.id} details={result} closeResults={this.closeResults} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Search;
