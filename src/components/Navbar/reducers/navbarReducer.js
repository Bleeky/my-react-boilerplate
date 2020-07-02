const defaultState = {
  ready: false,
  top: {
    display: true,
  },
  bottom: {
    display: false,
    title: () => null,
    content: () => null,
  },
};

export default function navbarReducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_NAVBAR_REQUEST': {
      return {
        ...state,
        ready: false,
      };
    }
    case 'SET_NAVBAR_FULFILLED': {
      return {
        ...state,
        ready: true,
        bottom: action.payload.bottom ? action.payload.bottom : state.bottom,
        top: action.payload.top ? action.payload.top : state.top,
      };
    }
    default:
      return state;
  }
}
