import { Observable } from 'rxjs';
import api from 'api';

import { combineEpics } from 'redux-observable';

import {
  FETCH_MOVIE_REQUEST,
  fetchMovieFulfilled,
  fetchMovieRejected,
} from '../actions';

const fetchMovieRequest = params =>
  api.routes.getFilm({ params });

// Example of a side effect epic
const testEpic = action$ => action$.ofType('FETCH_MOVIE_DETAIL')
  .do(item => console.warn(item))
  .ignoreElements();

const fetchMovieEpic = (action$, store) =>
  action$.ofType(FETCH_MOVIE_REQUEST)
    .mergeMap(action =>
      fetchMovieRequest(action.payload)
        .flatMap(response =>
        // Concat 2 observables so they fire sequentially
          Observable.concat(
            Observable.of(fetchMovieFulfilled(response, action.extras)),
            Observable.of({ type: 'FETCH_MOVIE_DETAIL', payload: response }),
          ))
        // .map(response => fetchMovieFulfilled(response, action.extras))
        .catch(error => Observable.of(fetchMovieRejected(error, action.extras)))
        .takeUntil(action$.ofType(FETCH_MOVIE_REQUEST)));

export default combineEpics(
  fetchMovieEpic,
  testEpic,
);
