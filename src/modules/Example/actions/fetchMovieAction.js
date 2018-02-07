const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST';
const FETCH_MOVIE_FULFILLED = 'FETCH_MOVIE_FULFILLED';
const FETCH_MOVIE_REJECTED = 'FETCH_MOVIE_REJECTED';

const fetchMovie = (payload, extras) => ({ type: FETCH_MOVIE_REQUEST, payload, extras });
const fetchMovieFulfilled = (payload, extras) => ({ type: FETCH_MOVIE_FULFILLED, payload: payload.response, extras });
const fetchMovieRejected = (payload, extras) => ({ type: FETCH_MOVIE_REJECTED, payload, extras });

// function fetchMovieThunk(params) {
//   this.dispatch(this.actionCreator(FETCH_MOVIE_REQUEST, { hash: params.hash }));
//   api.routes.getFilm({ params }).then((res) => {
//     this.dispatch(this.actionCreator(FETCH_MOVIE_FULFILLED, { hash: params.hash, event: res.data.event }));
//   }).catch((err) => {
//     this.dispatch(this.actionCreator(FETCH_MOVIE_REJECTED, { errorMsg: error.message, hash: res.data.event }));
//   });
// }

export {
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_FULFILLED,
  FETCH_MOVIE_REJECTED,
  fetchMovie,
  fetchMovieFulfilled,
  fetchMovieRejected,
};
