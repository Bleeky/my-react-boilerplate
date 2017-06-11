import React, { Component } from 'react';

class ExampleCreateView extends Component {
  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('ExampleCreateView', this.props);
    return (
      <div>
        {'Let\'s create something !'}
      </div>
    );
  }
}

export default ExampleCreateView;
