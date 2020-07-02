import api from "api";
import { v4 as uuidv4 } from "uuid";

const refreshToken = (payload, extras) => ({
  type: "REFRESH_TOKEN_REQUEST",
  payload,
  extras: { ...extras, uuid: uuidv4() },
});
const refreshTokenFulfilled = (payload, extras) => ({
  type: "REFRESH_TOKEN_FULFILLED",
  payload: payload.response,
  extras,
});
const refreshTokenRejected = (payload, extras) => ({
  type: "REFRESH_TOKEN_REJECTED",
  payload,
  extras,
});

const refreshTokenRequest = (payload) =>
  api.resources.refreshToken({ body: JSON.stringify(payload.values) });

export {
  refreshToken,
  refreshTokenFulfilled,
  refreshTokenRejected,
  refreshTokenRequest,
};
