import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import DisplayMovie from './components/DisplayMovie';
import Popular from './components/Popular';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// TODO: Fix tests

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route path='/' component={Search} />
          <Route exact path='/' component={Popular} />
          <Route exact path='/display/:id' component={DisplayMovie} />
        </div>
      </Router>
    );
  }
}

export default App;
