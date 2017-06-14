const FETCH_MOVIES = 'FETCH_MOVIES';
const FETCH_MOVIES_FULFILLED = 'FETCH_MOVIES_FULFILLED';
const FETCH_MOVIES_REJECTED = 'FETCH_MOVIES_REJECTED';

const fetchMovies = () => ({ type: FETCH_MOVIES });
const fetchMoviesFulfilled = payload => ({ type: FETCH_MOVIES_FULFILLED, payload: payload.response });
const fetchMoviesRejected = payload => ({ type: FETCH_MOVIES_REJECTED, payload });

export {
  FETCH_MOVIES,
  FETCH_MOVIES_FULFILLED,
  FETCH_MOVIES_REJECTED,
  fetchMovies,
  fetchMoviesFulfilled,
  fetchMoviesRejected,
};
