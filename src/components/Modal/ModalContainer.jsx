import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setModal } from './actions';
import ModalView from './ModalView';

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setModal,
    },
    dispatch,
  );

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalView);

export default ModalContainer;
