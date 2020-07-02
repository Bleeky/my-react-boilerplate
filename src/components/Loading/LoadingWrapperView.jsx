import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import {
  LoadingGrid,
  LoadingList,
  LoadingView,
  LoadingSpinner,
} from "./LoadingViews";

class LoadingWrapperView extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    loading: PropTypes.shape().isRequired,
    loadingView: PropTypes.string.isRequired,
    className: PropTypes.string,
    loaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  static defaultProps = {
    className: undefined,
  };

  constructor(props) {
    super(props);

    this.loadingsViews = {
      GRID: LoadingGrid,
      LIST: LoadingList,
      VIEW: LoadingView,
      SPINNER: LoadingSpinner,
    };
    this.state = {
      currentLoader: null,
    };
  }

  static getDerivedStateFromProps = (props) => {
    let currentLoader = null;
    Object.keys(props.loading).forEach((k) => {
      if (props.loaders.find((loader) => loader === props.loading[k].type)) {
        currentLoader = this.loadingsViews[props.loadingView];
      }
    });
    return {
      currentLoader,
    };
  };

  render() {
    const Loader = this.state.currentLoader;
    return (
      <Fragment>
        {Loader && <Loader className={this.props.className} />}
        <div style={{ visibility: `${Loader ? "hidden" : "visible"}` }}>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default LoadingWrapperView;
