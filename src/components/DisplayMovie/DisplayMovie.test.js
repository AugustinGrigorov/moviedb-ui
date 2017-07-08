import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import DisplayMovie from './DisplayMovie';

jest.mock('../../util/apiHandler');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DisplayMovie match={{ params: { id: 1234 } }} />, div);
});

it('it should display spinner initially', () => {
  const movieView = mount(
    <DisplayMovie match={{ params: { id: 1234 } }} />
  );
  const spinner = movieView.find('.spinner');
  expect(spinner.exists()).toBe(true);
});

it('it should display content when loaded', () => {
  const movieComponent = mount(
    <DisplayMovie match={{ params: { id: 1234 } }} />
  );
  movieComponent.setState({
    movieDetails: {
      original_title: 'abcd',
      genres: [],
      poster_path: 'abcd',
      overview: 'abcd'
    },
    movieDetailsLoaded: true
  })
  movieComponent.update()
  const movieView = movieComponent.find('.movieView');
  expect(movieView.exists()).toBe(true);
});
