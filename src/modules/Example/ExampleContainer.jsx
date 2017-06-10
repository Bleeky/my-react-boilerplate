import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import ExampleView from './ExampleView';
import example from './actions';

const mapStateToProps = state => ({
  message: state.example.message,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  example,
}, dispatch);

const ExampleContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ExampleView));

export default ExampleContainer;
