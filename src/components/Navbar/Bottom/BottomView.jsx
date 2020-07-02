import React, { Component } from "react";
import PropTypes from "prop-types";

class BottomView extends Component {
  static propTypes = {
    navbar: PropTypes.shape().isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.navbar.bottom.display) {
      return (
        <div className="subNavbar">
          <div className="container">
            <div className="subNavbar_title">
              {this.props.navbar.bottom.title()}
            </div>
            <div className="subNavbar_linkList">
              {this.props.navbar.bottom.content()}
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default BottomView;
