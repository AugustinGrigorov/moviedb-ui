import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Search from './components/Search';
import DisplayMovie from './components/DisplayMovie';
import Popular from './components/Popular';


function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" component={Search} />
        <Route exact path="/" component={Popular} />
        <Route exact path="/display/:id" component={DisplayMovie} />
      </div>
    </Router>
  );
}

export default App;
