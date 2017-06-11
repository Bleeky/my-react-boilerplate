import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './reducers';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

if (module.hot) {
  module.hot.accept('./epics', () => {
    const nextRootEpic = require('./epics').default;
    epicMiddleware.replaceEpic(nextRootEpic);
  });
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(epicMiddleware),
      process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );

  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers').default),
    );
  }

  return store;
}
