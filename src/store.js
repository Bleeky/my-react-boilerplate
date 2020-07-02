import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import * as firebase from "firebase";
import { BehaviorSubject } from "rxjs";
import { switchMap } from "rxjs/operators";
import api from "api";

import reducerRegistry from "./reducerRegistry";
import epicsRegistry from "./epicsRegistry";

const initialReducers = {};
const epicMiddleware = createEpicMiddleware();

const epic$ = new BehaviorSubject(combineEpics(...epicsRegistry.getEpics()));

const hotReloadingEpic = (...args) =>
  epic$.pipe(switchMap((epic) => epic(...args)));

const combine = (reducers) => {
  const reducerNames = Object.keys(reducers);
  Object.keys(initialReducers).forEach((item) => {
    if (reducerNames.indexOf(item) === -1) {
      reducers[item] = (state = null) => state; // eslint-disable-line
    }
  });
  return combineReducers(reducers);
};

const firebaseConfig = {
  apiKey: "AIzaSyDbuz99PZvGW1fIpdDFvSzht-pLSGbtxcY",
  authDomain: "checkq-1acc3.firebaseapp.com",
  databaseURL: "https://checkq-1acc3.firebaseio.com",
  projectId: "checkq-1acc3",
  storageBucket: "checkq-1acc3.appspot.com",
  messagingSenderId: "570389562466",
  appId: "1:570389562466:web:f1693ae8aae65b62a1bd3b",
  measurementId: "G-JFBE8QRS5B",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function configureStore() {
  const store = createStore(
    combine(reducerRegistry.getReducers()),
    compose(
      applyMiddleware(epicMiddleware),
      process.env.NODE_ENV === "development" &&
        window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
    )
  );

  reducerRegistry.setChangeListener((reducers) => {
    store.replaceReducer(combine(reducers));
  });

  epicsRegistry.setChangeListener((epics) => {
    epic$.next(combineEpics(...epics));
  });

  epicMiddleware.run(hotReloadingEpic);

  if (module.hot) {
    module.hot.accept("./epicsRegistry", () => {
      const nextEpicsRegistry = require('./epicsRegistry').default; // eslint-disable-line
      epic$.next(combineEpics(...nextEpicsRegistry.getEpics()));
    });
  }

  if (module.hot) {
    module.hot.accept("./reducerRegistry", () => {
      const nextReducerRegistry = require('./reducerRegistry').default; // eslint-disable-line
      store.replaceReducer(combine(nextReducerRegistry.getReducers()));
    });
  }

  api.addRequestMiddlewares([
    {
      name: "token",
      handler: () => ({
        headers: {
          Authorization: `Bearer ${store.getState().auth.accessToken}`,
        },
      }),
    },
  ]);

  return store;
}

const store = configureStore();

export default store;
