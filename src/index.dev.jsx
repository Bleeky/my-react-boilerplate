import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line

import AppRouter from './AppRouter';
import configureStore from './store';

import './assets/scss/app.scss';

const {
  render,
} = ReactDOM;

const store = configureStore();

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
  document.getElementById('root'));
};

renderApp(AppRouter);

if (module.hot) {
  module.hot.accept('./AppRouter', () => {
    const NewAppRouter = require('./AppRouter').default;
    render(
      <AppContainer>
        <NewAppRouter store={store} />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
