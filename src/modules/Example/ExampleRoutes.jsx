import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import ExampleCreate from './ExampleCreate';

const ExampleRoutes = ({ match }) => (
  <Route path={`${match.url}/create`} component={ExampleCreate} />
);

export default ExampleRoutes;
