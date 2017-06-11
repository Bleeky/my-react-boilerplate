import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';

import {
  FETCH_MOVIES,
  fetchMoviesFulfilled,
  fetchMoviesRejected,
} from '../actions';

const fetchMoviesRequest = () =>
  ajax.getJSON('https://ghibliapi.herokuapp.com/films');

const fetchMoviesEpic = (action$, store) =>
  action$.ofType(FETCH_MOVIES)
    .mergeMap(() =>
       fetchMoviesRequest()
        .map(response => fetchMoviesFulfilled(response))
        .catch(error => Observable.of(
          fetchMoviesRejected(error),
        )),
    );

export default fetchMoviesEpic;
