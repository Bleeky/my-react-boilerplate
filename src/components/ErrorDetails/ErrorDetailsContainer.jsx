import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setModal } from 'components/Modal/actions';
import { generateAction } from 'common/helpers';

import ErrorDetailsView from './ErrorDetailsView';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setModal,
      copyErrorToast: generateAction({
        actionType: 'COPY_ERROR_TOAST',
        actionExtras: uuid => ({ toastID: uuid, toastType: 'light', toastMessage: 'Copied to clipboard' }),
      }),
    },
    dispatch,
  );

const ErrorDetailsContainer = connect(
  null,
  mapDispatchToProps,
)(ErrorDetailsView);

export default ErrorDetailsContainer;
