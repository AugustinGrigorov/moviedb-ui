import React from 'react';
import ReactDOM from 'react-dom';
import Popular from './Popular';
import PopularMovie from './PopularMovie';
import { MemoryRouter } from 'react-router-dom'

jest.mock('../../util/apiHandler');

it('renders Popular without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Popular />
    </MemoryRouter>, div);
});

it('renders PopularMovie without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <PopularMovie details={{id: 1234, poster_path:'abcd', title:'abcd'}} />
    </MemoryRouter>, div);
});
