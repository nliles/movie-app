import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchMovies, removeMovie, addMovie } from '../actions/movieActions'
import MovieForm from '../components/MovieForm';
import MovieItem from '../components/MovieItem';
import { ListGroup, Card, CardTitle, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

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
      <Row>
        <Col xs="7" className="col">
            <Card className="movie_list_title">
              <CardTitle className="title_text">My Movies</CardTitle>
            </Card>
            <div className="list-group-item">
              <MovieForm handleSubmit={this.handleFormSubmit} />
            </div>
            <ListGroup>
                {this.props.movies.map((movie) => {
                  return <MovieItem key={movie.imdbId} removeOnClick={this.removeMovie} movie={movie} />
                })}
            </ListGroup>
        </Col>
      </Row>
    )
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

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



