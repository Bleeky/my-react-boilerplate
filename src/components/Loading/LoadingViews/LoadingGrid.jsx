import React, { Component, Fragment } from 'react';

class LoadingGrid extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="grid grid--gutters grid--flexCells">
          <div className="grid-cell grid-cell--1of4">
            <div className="card">
              <div className="card-img">
                <div className="loading-image" />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <div className="loading-textPlaceholder loading-textPlaceholder--text-headline loading-textPlaceholder--full" />
                </div>
                <div className="loading-textPlaceholder" />
              </div>
            </div>
          </div>
          <div className="grid-cell grid-cell--1of4">
            <div className="card">
              <div className="card-img">
                <div className="loading-image" />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <div className="loading-textPlaceholder loading-textPlaceholder--text-headline loading-textPlaceholder--full" />
                </div>
                <div className="loading-textPlaceholder" />
              </div>
            </div>
          </div>
          <div className="grid-cell grid-cell--1of4">
            <div className="card">
              <div className="card-img">
                <div className="loading-image" />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <div className="loading-textPlaceholder loading-textPlaceholder--text-headline loading-textPlaceholder--full" />
                </div>
                <div className="loading-textPlaceholder" />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LoadingGrid;
