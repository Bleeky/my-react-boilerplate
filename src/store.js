import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './reducers';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(epicMiddleware),
      process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );

  return store;
}
