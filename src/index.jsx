import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import configureStore from './store';

import './assets/scss/app.scss';

const {
  render,
} = ReactDOM;

const store = configureStore();

render(
  (
    <AppRouter store={store} />
  ),
  document.getElementById('root'),
);
