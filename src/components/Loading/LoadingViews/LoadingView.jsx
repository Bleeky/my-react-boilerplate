import React, { Component } from 'react';

class LoadingView extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="pageHeader">
          <div className="loading-textPlaceholder loading-textPlaceholder--text-display" />
        </div>
        <div className="grid grid-gutters grid--max2of3">
          <div className="grid-cell">
            <div className="pageSection">
              <div className="loading-textPlaceholder u-mb-1" />
              <div className="loading-textPlaceholder loading-textPlaceholder--text-caption" />
              <div className="loading-textPlaceholder loading-textPlaceholder--text-caption" />
              <div className="loading-textPlaceholder loading-textPlaceholder--text-caption" />
              <div className="loading-textPlaceholder loading-textPlaceholder--text-caption" />
            </div>
            <div className="pageSection">
              <div className="loading-textPlaceholder u-mb-1" />
              <div className="loading-textPlaceholder loading-textPlaceholder--text-caption" />
              <div className="loading-textPlaceholder loading-textPlaceholder--text-caption" />
            </div>
            <div className="pageSection">
              <div className="loading-textPlaceholder u-mb-1" />
              <div className="loading-textPlaceholder loading-textPlaceholder--text-caption" />
              <div className="loading-textPlaceholder loading-textPlaceholder--text-caption" />
              <div className="loading-textPlaceholder loading-textPlaceholder--text-caption" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingView;
