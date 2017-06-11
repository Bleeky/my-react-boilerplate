import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import AppRouter from './AppRouter';
import store from './store';
import './assets/scss/app.scss';

const {
  render,
} = ReactDOM;

const rootElement = document.getElementById('root');

const renderApp = () => {
  render(
    (
      <AppContainer>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </AppContainer>
    ),
    rootElement,
  );
};

renderApp();

if (module.hot) {
  module.hot.accept(() => renderApp());
}
