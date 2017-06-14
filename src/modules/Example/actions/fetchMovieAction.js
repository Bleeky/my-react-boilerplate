const FETCH_MOVIE = 'FETCH_MOVIE';
const FETCH_MOVIE_FULFILLED = 'FETCH_MOVIE_FULFILLED';
const FETCH_MOVIE_REJECTED = 'FETCH_MOVIE_REJECTED';

const fetchMovie = id => ({ type: FETCH_MOVIE, urlParams: { id } });
const fetchMovieFulfilled = payload => ({ type: FETCH_MOVIE_FULFILLED, payload: payload.response });
const fetchMovieRejected = payload => ({ type: FETCH_MOVIE_REJECTED, payload });

export {
  FETCH_MOVIE,
  FETCH_MOVIE_FULFILLED,
  FETCH_MOVIE_REJECTED,
  fetchMovie,
  fetchMovieFulfilled,
  fetchMovieRejected,
};
