import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import ExampleCreate from './ExampleCreate';
import NotFound from 'NotFound';

const ExampleRoutes = ({ match }) => (
  <Switch>
    <Route exact path={match.url} />
    <Route path={`${match.url}/create`} component={ExampleCreate} />
    <Route component={NotFound} />
  </Switch>
);

export default ExampleRoutes;
