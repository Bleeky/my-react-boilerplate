import { combineEpics } from "redux-observable";

import loginEpic from "./loginEpic";
import logoutEpic from "./logoutEpic";
import meEpic from "./meEpic";

const authEpic = combineEpics(loginEpic, logoutEpic, meEpic);

export default authEpic;
