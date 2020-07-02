import React, { Component } from 'react';

import Bottom from './Bottom';
import Top from './Top';

class NavbarView extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Top key="topNavbar" {...this.props} />
        <Bottom key="bottomNavbar" {...this.props} />
      </div>
    );
  }
}

export default NavbarView;
