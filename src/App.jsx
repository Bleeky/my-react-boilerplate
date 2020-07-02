import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import HomeRouter from "routes/HomeRouter";

import Navbar from "components/Navbar";

class App extends PureComponent {
  static propTypes = {
    auth: PropTypes.shape().isRequired,
  };

  render() {
    return (
      <div className="app">
        <Route
          render={(props) => {
            if (this.props.auth.isAuthenticated) {
              return [
                <Navbar key="navbar" {...props} />,
                <HomeRouter {...props} key="application" />,
              ];
            }
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location },
                }}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;
