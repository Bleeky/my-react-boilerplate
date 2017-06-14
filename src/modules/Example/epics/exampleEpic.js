import { Observable } from 'rxjs';
import api from 'api';

import {
  FETCH_MOVIES,
  fetchMoviesFulfilled,
  fetchMoviesRejected,
} from '../actions';

const fetchMoviesRequest = () =>
  api.routes.getAllFilms();

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
