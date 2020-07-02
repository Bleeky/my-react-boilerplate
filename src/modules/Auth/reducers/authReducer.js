import sanitize from "sanitizers";

const defaultState = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  user: {},
};

export default function authReducer(state = defaultState, action) {
  switch (action.type) {
    case "LOGIN_FULFILLED":
      return {
        ...state,
        isAuthenticated: true,
        accessToken: action.payload.access_token,
        refreshToken: action.payload.refresh_token,
        user: sanitize("user", action.payload.user),
      };
    case "LOGIN_REJECTED":
      return defaultState;
    case "LOGOUT_FULFILLED":
      return defaultState;
    case "ME_FULFILLED":
      return {
        ...state,
        isAuthenticated: true,
        accessToken: localStorage.getItem("accessToken"),
        refreshToken: localStorage.getItem("refreshToken"),
        user: sanitize("user", action.payload),
      };
    case "ME_REJECTED":
      return defaultState;
    default:
      return state;
  }
}
