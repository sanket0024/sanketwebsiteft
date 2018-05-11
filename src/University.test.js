import React from 'react';
import ReactDOM from 'react-dom';
import University from './University';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<University />, div);
  ReactDOM.unmountComponentAtNode(div);
});
