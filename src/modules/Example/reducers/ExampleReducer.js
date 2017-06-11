import {
  FETCH_MOVIES_FULFILLED,
  FETCH_MOVIES_REJECTED,
  FETCH_MOVIES,
} from '../actions';

export default function exampleReducer(state = {
  movies: [],
}, action) {
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
    default:
      return state;
  }
}
