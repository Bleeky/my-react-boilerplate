import { CombineWrappers } from "rxjs-ajax-wrapper";

import authAPI from "modules/Auth/actions/api";

const api = new CombineWrappers({
  auth: authAPI,
});

export default api;
