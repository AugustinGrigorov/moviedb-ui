import React from 'react';
import ReactDOM from 'react-dom';
import Popular from './Popular';

jest.mock('../../util/apiHandler');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Popular />, div);
});
