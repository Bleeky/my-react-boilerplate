import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import ExampleView from './ExampleView';
import {
  fetchMovies,
  fetchMovie,
} from './actions';

const mapStateToProps = state => ({
  movies: state.example.movies,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies,
  fetchMovie,
}, dispatch);

const ExampleContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ExampleView));

export default ExampleContainer;
