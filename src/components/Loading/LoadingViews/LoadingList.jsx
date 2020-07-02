import React, { Component, Fragment } from 'react';

class LoadingList extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="listWrapper listWrapper--topborder">
          <div className="list">
            <div className="list-column list-column--picture">
              <div className="loading-image" />
            </div>
            <div className="list-column list-column--title">
              <div className="loading-textPlaceholder" />
            </div>
          </div>
          <div className="list">
            <div className="list-column list-column--picture">
              <div className="loading-image" />
            </div>
            <div className="list-column list-column--title">
              <div className="loading-textPlaceholder" />
            </div>
          </div>
          <div className="list">
            <div className="list-column list-column--picture">
              <div className="loading-image" />
            </div>
            <div className="list-column list-column--title">
              <div className="loading-textPlaceholder" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LoadingList;
