const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST';
const FETCH_MOVIE_FULFILLED = 'FETCH_MOVIE_FULFILLED';
const FETCH_MOVIE_REJECTED = 'FETCH_MOVIE_REJECTED';

const fetchMovie = (payload, extras) => ({ type: FETCH_MOVIE_REQUEST, payload, extras });
const fetchMovieFulfilled = (payload, extras) => ({ type: FETCH_MOVIE_FULFILLED, payload: payload.response, extras });
const fetchMovieRejected = (payload, extras) => ({ type: FETCH_MOVIE_REJECTED, payload, extras });

export {
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_FULFILLED,
  FETCH_MOVIE_REJECTED,
  fetchMovie,
  fetchMovieFulfilled,
  fetchMovieRejected,
};
