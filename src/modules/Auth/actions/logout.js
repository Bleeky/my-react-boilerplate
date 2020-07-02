import api from "api";
import { v4 as uuidv4 } from "uuid";

const logout = (payload, extras) => ({
  type: "LOGOUT_REQUEST",
  payload,
  extras: { ...extras, uuid: uuidv4() },
});
const logoutFulfilled = (payload, extras) => ({
  type: "LOGOUT_FULFILLED",
  payload: payload.response,
  extras,
});
const logoutRejected = (payload, extras) => ({
  type: "LOGOUT_REJECTED",
  payload,
  extras,
});

const logoutRequest = (payload) =>
  api.resources.auth.logout({ body: JSON.stringify(payload) });

export { logout, logoutFulfilled, logoutRejected, logoutRequest };
