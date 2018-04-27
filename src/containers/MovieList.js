import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchMovies, removeMovie, addMovie } from '../actions/movieActions'
import Form from '../components/Form';
import MovieItem from '../components/MovieItem';
import { withRouter } from 'react-router';
import { ListGroup, ListGroupItem } from 'reactstrap';

const propTypes = {
};

class MovieList extends Component {

  componentDidMount() {

    if (!this.props.movies.length) {
      const myMovies = ["Brooklyn", "Mean Girls", "When Harry Met Sally"]
      myMovies.forEach((movie) => this.props.searchMovies(movie))
    }
  }

  handleFormSubmit = (e, movieTerm) => {
    e.preventDefault();
    this.props.searchMovies(movieTerm)
  }

  removeMovie = (movieTitle) => {
    this.props.removeMovie(movieTitle)
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-7">
          <div className="panel panel-default">
            <div className="panel-heading c-list">
              <span className="title">My Movies</span>
              <img className="popcorn" alt="popcorn icon" src="./popcorn.png" height="40" width="40" />
            </div>
            <div className="list-group-item">
              <Form handleSubmit={this.handleFormSubmit} />
            </div>
            <ListGroup>
                {this.props.movies.map((movie) => {
                  return <MovieItem key={movie.imdbId} removeOnClick={this.removeMovie} movie={movie} />
                })}
            </ListGroup>
          </div>
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
  removeMovie,
  addMovie
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);



