import { connect } from 'react-redux';

import LoadingWrapperView from './LoadingWrapperView';

const mapStateToProps = state => ({
  loading: state.loading,
});

const LoadingWrapperContainer = connect(
  mapStateToProps,
  null,
)(LoadingWrapperView);

export default LoadingWrapperContainer;
