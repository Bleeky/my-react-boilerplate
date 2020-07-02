import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BottomView from './BottomView';

const mapStateToProps = state => ({
  navbar: state.navbar,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const BottomContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BottomView);

export default BottomContainer;
