import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ExampleCreateView from './ExampleCreateView';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

const ExampleCreateContainer = connect(mapStateToProps, mapDispatchToProps)(ExampleCreateView);

export default ExampleCreateContainer;
