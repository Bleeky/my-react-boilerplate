import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ExampleRoutes from './ExampleRoutes';

class ExampleView extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    fetchMovies: PropTypes.func.isRequired,
    fetchMovie: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Welcome to my boilerplate ! Yeah</div>
        <button onClick={this.props.fetchMovies}>Fetch movies.</button>
        {this.props.movies.map(movie =>
          (<div>{movie.title}
            <button onClick={() => { this.props.fetchMovie(movie.id); }}>Fetch this movie</button>
          </div>))}
        <ExampleRoutes match={this.props.match} />
      </div>
    );
  }
}

export default ExampleView;
