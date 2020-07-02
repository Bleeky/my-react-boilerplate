import api from "api";
import { v4 as uuidv4 } from "uuid";

const me = (payload, extras) => ({
  type: "ME_REQUEST",
  payload,
  extras: { ...extras, uuid: uuidv4() },
});
const meFulfilled = (payload, extras) => ({
  type: "ME_FULFILLED",
  payload,
  extras,
});
const meRejected = (payload, extras) => ({
  type: "ME_REJECTED",
  payload,
  extras,
});

const meRequest = (payload) => api.resources.auth.me(payload);

export { me, meFulfilled, meRejected, meRequest };
