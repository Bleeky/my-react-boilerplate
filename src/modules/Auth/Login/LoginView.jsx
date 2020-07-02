import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { LoadingWrapper } from "components/Loading";

import LoginForm from "./LoginForm";

class LoginView extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    me: PropTypes.func.isRequired,
    auth: PropTypes.shape().isRequired,
    location: PropTypes.shape().isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};

    if (localStorage.getItem("accessToken")) {
      this.props.me({}, { loading: true });
    }
  }

  render() {
    let { from } = this.props.location.state || {
      from: { pathname: "/hotels" },
    };
    if (from.pathname === "/") {
      from = { from: { pathname: "/hotels" } };
    }
    if (this.props.auth.isAuthenticated) {
      return <Redirect to={from} />;
    }

    return (
      <LoadingWrapper
        loaders={["ME_REQUEST"]}
        loadingView="SPINNER"
        className="loading-wrapper--vCenter"
      >
        <LoginForm
          onSubmit={(values) => {
            this.props.login({ values });
          }}
        />
      </LoadingWrapper>
    );
  }
}

export default LoginView;
