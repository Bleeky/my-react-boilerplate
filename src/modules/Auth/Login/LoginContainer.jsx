import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { me, login } from 'modules/Auth/actions';

import LoginView from './LoginView';

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login,
      me,
    },
    dispatch,
  );

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView);

export default LoginContainer;
