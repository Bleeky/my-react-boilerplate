import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ExampleRoutes from './ExampleRoutes';

class ExampleView extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    example: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Welcome to my boilerplate ! {this.props.message}</div>
        <button onClick={this.props.example}>Update here.</button>

        <ExampleRoutes match={this.props.match} />
      </div>
    );
  }
}

export default ExampleView;
