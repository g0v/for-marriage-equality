// tslint:disable-next-line:import-name
import React from 'react';
// tslint:disable-next-line:import-name
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
