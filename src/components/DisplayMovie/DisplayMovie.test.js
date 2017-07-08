import React from 'react';
import ReactDOM from 'react-dom';
import DisplayMovie from './DisplayMovie';

jest.mock('../../util/apiHandler');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DisplayMovie match={{params: {id: 1234}}} />, div);
});
