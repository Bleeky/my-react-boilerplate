import { v4 as uuidv4 } from "uuid";

const generateAction = (params) => (payload, extras) => ({
  type: params.actionType,
  payload,
  extras: {
    ...extras,
    uuid: uuidv4(),
    ...(params.actionExtras ? params.actionExtras(uuid()) : {}),
  },
});

export default generateAction;
