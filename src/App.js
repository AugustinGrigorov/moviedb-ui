import React, { Component } from 'react';
import './App.css';
import Search from './componnents/Search';
import DisplayMovie from './componnents/DisplayMovie'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path="/" component={Search} />
          <Route exact path="/display/:id" component={DisplayMovie} />
        </div>
      </Router>
    );
  }
}

export default App;
