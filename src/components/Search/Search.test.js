import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme';

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

it('it should not shorten descriptions less than 300 chars', () => {
  const searchResult = mount(
    <MemoryRouter>
      <SearchResult details={{id: 1234, poster_path:'abcd', title:'abcd', overview: 'abcd'}} />
    </MemoryRouter>
  );
  const overview = searchResult.find('.movieOverview');
  expect(overview.text()).toBe('abcd');
});

it('it should shorten descriptions more than 300 chars', () => {
  const searchResult = mount(
    <MemoryRouter>
      <SearchResult details={{id: 1234, poster_path:'abcd', title:'abcd',
      overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis odio ut sem accumsan fringilla non et libero. Suspendisse eu purus efficitur, mollis velit ac, suscipit libero. Nam et nulla dolor. Praesent sodales eu arcu ac viverra. Nam dignissim imperdiet ligula, at eleifend justo aliquet et. Integer a justo quis lorem rutrum dictum nec at velit. Integer maximus eu magna sed tempor. Nunc ac augue pulvinar ligula maximus faucibus consectetur ut nibh.'}} />
    </MemoryRouter>
  );
  const overview = searchResult.find('.movieOverview');
  expect(overview.text()).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis odio ut sem accumsan fringilla non et libero. Suspendisse eu purus efficitur, mollis velit ac, suscipit libero. Nam et nulla dolor. Praesent sodales eu arcu ac viverra. Nam dignissim imperdiet ligula, at eleifend justo aliquet et. I...');
});
