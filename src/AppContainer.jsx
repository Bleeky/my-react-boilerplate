import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from './App';

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

const AppContainer = connect(null, mapDispatchToProps)(App);

export default AppContainer;
