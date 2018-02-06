import { Observable } from 'rxjs';
import api from 'api';

import {
  FETCH_MOVIE,
  fetchMovieFulfilled,
  fetchMovieRejected,
} from '../actions';

const fetchMovieRequest = params =>
  api.routes.getFilm({ params });

const fetchMovieEpic = (action$, store) =>
  action$.ofType(FETCH_MOVIE)
    .mergeMap(action =>
      fetchMovieRequest(action.params)
        .map(response => fetchMovieFulfilled(response))
        .catch(error => Observable.of(fetchMovieRejected(error)))
        .takeUntil(action$.ofType(FETCH_MOVIE)));

export default fetchMovieEpic;
