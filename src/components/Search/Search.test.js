import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import { MemoryRouter } from 'react-router-dom'


jest.mock('../../util/apiHandler');

it('renders Search without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Search />, div);
});

it('renders SearchBar without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBar />, div);
});

it('renders SearchResult without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <SearchResult details={{id: 1234, poster_path:'abcd', title:'abcd', overview: 'abcd'}} />
    </MemoryRouter>, div);
});
