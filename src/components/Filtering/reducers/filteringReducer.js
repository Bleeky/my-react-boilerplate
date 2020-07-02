export default function filteringReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_FILTERING':
      return {
        ...state,
        [action.extras.reducerField]: action.payload.filters.map(option => ({
          ...option,
          selected: [],
        })),
      };
    case 'UPDATE_FILTERING':
      return {
        ...state,
        [action.extras.reducerField]: state[action.extras.reducerField].map((option) => {
          if (option.label === action.payload.filter) {
            return {
              ...option,
              selected: option.selected.find(selected => selected === action.payload.option)
                ? option.selected.filter(selected => selected !== action.payload.option)
                : [...option.selected, action.payload.option],
            };
          }
          return option;
        }),
      };
    default:
      return state;
  }
}
