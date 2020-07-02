// import { reducer as reduxFormReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import navbarReducer from "components/Navbar/reducers";
import modalReducer from "components/Modal/reducers";
import loadingReducer from "components/Loading/reducers";
import filteringReducer from "components/Filtering/reducers";
import sortingReducer from "components/Sorting/reducers";

import authReducer from "modules/Auth/reducers";

export class ReducerRegistry {
  constructor() {
    this.emitChange = null;
    this.reducers = {
      auth: authReducer,
      // form: reduxFormReducer,
      filtering: filteringReducer,
      sorting: sortingReducer,
      loading: loadingReducer,
      modal: modalReducer,
      navbar: navbarReducer,
      toastr: toastrReducer,
    };
  }

  getReducers() {
    return { ...this.reducers };
  }

  register(name, reducer) {
    this.reducers = { ...this.reducers, [name]: reducer };
    if (this.emitChange) {
      this.emitChange(this.getReducers());
    }
  }

  setChangeListener(listener) {
    this.emitChange = listener;
  }
}

const reducerRegistry = new ReducerRegistry();
export default reducerRegistry;
