import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchMovies, removeMovie } from '../actions/movieActions'
import AddMovie from '../components/AddMovie';
import MovieItem from '../components/MovieItem';

const propTypes = {
};

class Movies extends Component {

  componentDidMount() {
    // const movies = ["When Harry Met Sally", "Mean Girls", "Brooklyn"]
    // movies.forEach((movie) => this.props.searchMovies(movie))
  }

  removeMovie = (movieTitle) => {
    this.props.removeMovie(movieTitle)
  }

	render() {
            return(
              <div>
                <h2>My Movies</h2><br/>
                <AddMovie/>
                    <div>
                        <MovieItem f={this.removeMovie} movies={this.props.movies}/>
                    </div>
              </div>
          ) 
  }
}

const mapStateToProps = (state) => {
    return {
      movies: state.movies
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  searchMovies, 
  removeMovie
}, dispatch)

Movies.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);



