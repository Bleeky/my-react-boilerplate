import * as actions from '../actions';

export default function exampleReducer(state = {
  movies: [],
}, action) {
  console.log(action);
  switch (action.type) {
    case actions.FETCH_MOVIES:
      return {
        ...state,
      };
    case actions.FETCH_MOVIES_FULFILLED:
      return {
        ...state,
        movies: action.payload,
      };
    case actions.FETCH_MOVIES_REJECTED:
      return {
        ...state,
        error: action.payload,
      };
    case actions.FETCH_MOVIE_REQUEST:
      return {
        ...state,
      };
    case actions.FETCH_MOVIE_FULFILLED:
      return {
        ...state,
        movie: action.payload,
      };
    case actions.FETCH_MOVIE_REJECTED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
