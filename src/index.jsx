import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import { render } from "react-dom";
import AppRouter from "./AppRouter";
import store from "./store";

import "./assets/scss/app.scss";

render(<AppRouter store={store} />, document.getElementById("root"));
