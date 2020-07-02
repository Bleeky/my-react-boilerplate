import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { generateAction } from 'common/helpers';
import FilteringView from './FilteringView';

const mapStateToProps = state => ({
  filtering: state.filtering,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setFiltering: generateAction({ actionType: 'SET_FILTERING' }),
      updateFiltering: generateAction({ actionType: 'UPDATE_FILTERING' }),
    },
    dispatch,
  );

const FilteringContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilteringView);

export default FilteringContainer;
