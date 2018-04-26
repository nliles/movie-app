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

  toggleSearch() {
    var element = document.getElementById("addContainer");
    element.classList.toggle("mystyle");
  }

	render() {
            return(
<div class="container">

    <div class="row">
        <div class="col-xs-12 col-sm-offset-3 col-sm-7">
            <div class="panel panel-default">
                <div class="panel-heading c-list">
                    <span class="title">My Movies</span>
                </div>
                
                <div className="list-group-item">
                  <AddMovie/>
                </div>
                
              <MovieItem removeOnClick={this.removeMovie} movies={this.props.movies}/>
            </div>
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
  removeMovie
}, dispatch)

Movies.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);



