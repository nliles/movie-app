import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMovie, removeMovie } from '../actions/movieActions'
import MovieForm from '../components/MovieForm';
import MovieItem from '../components/MovieItem';
import { ListGroup, Card, CardTitle, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

class MovieList extends Component {

  componentDidMount() {

    if (!this.props.movies.length) {
      const myMovies = ["Brooklyn", "Mean Girls", "When Harry Met Sally"]
      myMovies.forEach((movie) => this.props.addMovie(movie))
    }
  }

  handleFormSubmit = (e, movieTerm) => {
    e.preventDefault();
    if (movieTerm.length) {
      this.props.addMovie(movieTerm)
    }
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
  removeMovie: PropTypes.func.isRequired,
  addMovie: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  addMovie,
  removeMovie,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);



