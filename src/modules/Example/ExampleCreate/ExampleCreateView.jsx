import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExampleCreateView extends Component {
  static propTypes = {
    text: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Let's create something !
      </div>
    );
  }
}

export default ExampleCreateView;
