import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import AppContainer from './AppContainer';
import NotFound from './NotFound';

const AppRouter = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path="/home" component={AppContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

AppRouter.propTypes = {
  store: PropTypes.shape().isRequired,
};

export default AppRouter;
