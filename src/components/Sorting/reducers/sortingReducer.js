export default function sortingReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_SORTING':
      return {
        ...state,
        [action.extras.reducerField]: {
          ...action.payload,
        },
      };
    case 'UPDATE_SORTING':
      return {
        ...state,
        [action.extras.reducerField]: {
          ...state[action.extras.reducerField],
          selected: action.payload.sort,
          desc: !(
            state[action.extras.reducerField].selected === action.payload.sort && state[action.extras.reducerField].desc
          ),
        },
      };
    default:
      return state;
  }
}
