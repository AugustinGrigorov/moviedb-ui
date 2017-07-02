import React, { Component } from 'react';
import './App.css';
import Search from './componnents/Search';

class App extends Component {
  render() {
    return (
      <div className="main_view">
        <Search />
      </div>
    );
  }
}

export default App;
