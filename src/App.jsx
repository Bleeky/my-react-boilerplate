import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Example } from './modules';

class App extends Component {
  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div className="app">
        I am the entry point !
        <Example />
      </div>
    );
  }
}

export default App;
