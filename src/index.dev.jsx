import React from 'react';
import ReactDOM from 'react-dom';
import {
  Provider,
} from 'react-redux';
import AppRouter from './AppRouter';
import store from './store';

const {
  render,
} = ReactDOM;

const rootElement = document.getElementById('root');

const renderApp = () => {
  render(
    (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    ),
    rootElement,
  );
};

renderApp();

if (module.hot) {
  module.hot.accept(() => renderApp());
}
