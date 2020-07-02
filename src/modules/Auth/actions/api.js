import { APIPath } from "config";
import { RxjsWrapper } from "rxjs-ajax-wrapper";

const apiDefs = {
  login: {
    url: `${APIPath}/auth/login`,
    method: "POST",
    ignoreMiddlewares: ["token"],
  },
  logout: {
    url: `${APIPath}/auth/logout`,
    method: "POST",
    ignoreMiddlewares: ["token"],
  },
  me: {
    url: `${APIPath}/api/v1/me`,
    method: "GET",
    ignoreMiddlewares: ["token"],
  },
};

const api = new RxjsWrapper(apiDefs);
export default api;
