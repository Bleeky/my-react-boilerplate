import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AppContainer from './AppContainer';
import NotFound from './NotFound';

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/home" component={AppContainer} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
