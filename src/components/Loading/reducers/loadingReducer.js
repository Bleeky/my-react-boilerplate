export default function loadingReducer(state = {}, action) {
  if (action.type.includes('REQUEST') && action.extras && action.extras.loading && action.extras.uuid) {
    return { [action.extras.uuid]: { ...action.extras, type: action.type }, ...state };
  }
  if (
    (action.type.includes('FULFILLED') || action.type.includes('REJECTED') || action.type.includes('CANCELLED'))
    && action.extras
    && action.extras.uuid
    && action.extras.loading
  ) {
    let newState = {};
    Object.keys(state).forEach((k) => {
      if (k !== action.extras.uuid) {
        newState = { ...newState, [k]: { ...state[k] } };
      }
    });
    return newState;
  }
  return state;
}
