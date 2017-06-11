import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import configureStore from './store';

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
