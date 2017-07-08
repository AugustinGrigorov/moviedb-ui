import React from 'react';
import ReactDOM from 'react-dom';
import MoviePoster from './MoviePoster';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MoviePoster />, div);
});
