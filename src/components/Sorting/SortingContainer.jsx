import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { generateAction } from 'common/helpers';
import SortingView from './SortingView';

const mapStateToProps = state => ({
  sorting: state.sorting,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setSorting: generateAction({ actionType: 'SET_SORTING' }),
      updateSorting: generateAction({ actionType: 'UPDATE_SORTING' }),
    },
    dispatch,
  );

const SortingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortingView);

export default SortingContainer;
