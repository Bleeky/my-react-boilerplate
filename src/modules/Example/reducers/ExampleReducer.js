import {
  FETCH_MOVIES_FULFILLED,
  FETCH_MOVIES_REJECTED,
  FETCH_MOVIES,
  FETCH_MOVIE_FULFILLED,
  FETCH_MOVIE_REJECTED,
  FETCH_MOVIE,
} from '../actions';

export default function exampleReducer(state = {
  movies: [],
}, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
      };
    case FETCH_MOVIES_FULFILLED:
      return {
        ...state,
        movies: action.payload,
      };
    case FETCH_MOVIES_REJECTED:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_MOVIE:
      return {
        ...state,
      };
    case FETCH_MOVIE_FULFILLED:
      return {
        ...state,
        movie: action.payload,
      };
    case FETCH_MOVIE_REJECTED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
