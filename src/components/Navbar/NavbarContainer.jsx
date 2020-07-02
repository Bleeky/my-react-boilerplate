import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NavbarView from './NavbarView';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavbarView);

export default NavbarContainer;
