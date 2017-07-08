import React from 'react';
import ReactDOM from 'react-dom';
import MoviePoster from './MoviePoster';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MoviePoster />, div);
});

it('it should display immage when given one', () => {
  const poster = mount(
    <MoviePoster posterImageUrl='abcd' size='w342' />
  );
  const image = poster.find('.poster');
  expect(image.exists()).toBe(true);
});

it('it should display placeholder when no image', () => {
  const poster = mount(
    <MoviePoster />
  );
  const placeholder = poster.find('.emptyPoster');
  expect(placeholder.exists()).toBe(true);
});
