import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MovieItem extends Component {

  render() {
    return this.props.movies.map((movie, i) => {
      return(
        <div key={i}>
          <Link to={`/movies/${movie.title}`}><h3>{movie.title}</h3></Link>
          <img src={movie.poster} alt="Movie Poster" height="42" width="42"/>
          <button onClick={e => this.props.f(movie.title)} type="button" className="btn btn-primary">Remove</button>
        </div>
      );
    });
  }
}

export default MovieItem;
