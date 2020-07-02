import React, { Fragment } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from "react-hot-loader/root";

import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReduxToastr from "react-redux-toastr";
import { Provider } from "react-redux";

import { Login } from "modules/Auth";
import Modal from "components/Modal";
import AppContainer from "./AppContainer";
import NotFound from "./NotFound";

const AppRouter = ({ store }) => {
  return (
    <Provider store={store}>
      <Fragment>
        <Router key="router">
          <Switch>
            <Route path="/login" exact component={Login} />
            <AppContainer path="/" />
            <Route component={NotFound} />
          </Switch>
        </Router>
        {/* <Modal key="modal" />
      <ReduxToastr
        timeOut={6000}
        newestOnTop={false}
        position="bottom-center"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
      /> */}
      </Fragment>
    </Provider>
  );
};

AppRouter.propTypes = {
  store: PropTypes.shape().isRequired,
};

export default hot(AppRouter);
