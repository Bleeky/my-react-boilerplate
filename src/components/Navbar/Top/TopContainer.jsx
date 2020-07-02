import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { logout } from 'modules/Auth/actions';

import TopView from './TopView';

const mapStateToProps = state => ({
  navbar: state.navbar,
  loggedUser: state.auth.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout,
    },
    dispatch,
  );

const TopContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopView);

export default TopContainer;
