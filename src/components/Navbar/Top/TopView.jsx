import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
// import { NavLink } from "react-router-dom";

class TopView extends Component {
  static propTypes = {
    navbar: PropTypes.shape().isRequired,
    loggedUser: PropTypes.shape().isRequired,
    logout: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="navbar">
          <div className="navbar_logo"></div>
          <div className="navbar_linkList"></div>
        </div>
      </Fragment>
    );
  }
}

export default TopView;
