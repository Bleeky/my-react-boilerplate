import { Observable } from 'rxjs';
import api from 'api';

import {
  FETCH_MOVIE,
  fetchMovieFulfilled,
  fetchMovieRejected,
} from '../actions';

const fetchMovieRequest = urlParams =>
  api.routes.getFilm(urlParams);

const fetchMovieEpic = (action$, store) =>
  action$.ofType(FETCH_MOVIE)
    .mergeMap(action =>
       fetchMovieRequest(action.urlParams)
        .map(response => fetchMovieFulfilled(response))
        .catch(error => Observable.of(
          fetchMovieRejected(error),
        ))
        .takeUntil(action$.ofType(FETCH_MOVIE)),
    );

export default fetchMovieEpic;
