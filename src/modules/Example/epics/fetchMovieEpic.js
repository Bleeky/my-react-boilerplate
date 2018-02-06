import { Observable } from 'rxjs';
import api from 'api';

import {
  FETCH_MOVIE_REQUEST,
  fetchMovieFulfilled,
  fetchMovieRejected,
} from '../actions';

const fetchMovieRequest = params =>
  api.routes.getFilm({ params });

const fetchMovieEpic = (action$, store) =>
  action$.ofType(FETCH_MOVIE_REQUEST)
    .mergeMap(action =>
      fetchMovieRequest(action.payload)
        .map(response => fetchMovieFulfilled(response, action.extras))
        .catch(error => Observable.of(fetchMovieRejected(error, action.extras)))
        .takeUntil(action$.ofType(FETCH_MOVIE_REQUEST)));

export default fetchMovieEpic;
