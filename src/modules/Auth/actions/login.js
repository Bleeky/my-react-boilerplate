import api from "api";
import { v4 as uuidv4 } from "uuid";

const login = (payload, extras) => ({
  type: "LOGIN_REQUEST",
  payload,
  extras: { ...extras, uuid: uuidv4() },
});
const loginFulfilled = (payload, extras) => ({
  type: "LOGIN_FULFILLED",
  payload,
  extras,
});
const loginRejected = (payload, extras) => ({
  type: "LOGIN_REJECTED",
  payload,
  extras,
});
const loginCancelled = (payload, extras) => ({
  type: "LOGIN_CANCELLED",
  payload,
  extras,
});

const loginRequest = (payload) =>
  api.resources.auth.login({
    body: JSON.stringify({ ...payload.values, platform: "web" }),
  });

export { login, loginFulfilled, loginRejected, loginRequest, loginCancelled };
