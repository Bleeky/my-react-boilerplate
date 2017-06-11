import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import NotFound from 'NotFound';

import ExampleCreate from './ExampleCreate';

const ExampleRoutes = ({ match }) => (
  <Switch>
    <Route exact path={match.url} />
    <Route exact path={`${match.url}/create`} component={ExampleCreate} />
    <Route component={NotFound} />
  </Switch>
);

export default ExampleRoutes;
