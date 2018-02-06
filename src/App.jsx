import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Example } from './modules';

class App extends Component {
  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        I am the entry point !
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/home/create">Create</Link></li>
        </ul>

        <Example />
      </div>
    );
  }
}

export default App;
