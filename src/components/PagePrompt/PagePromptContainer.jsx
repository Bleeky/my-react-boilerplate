import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setModal } from 'components/Modal/actions';

import PagePromptView from './PagePromptView';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setModal,
    },
    dispatch,
  );

const PagePromptContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PagePromptView);

export default PagePromptContainer;
