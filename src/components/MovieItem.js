import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MovieItem extends Component {

  render() {
    return this.props.movies.map((movie, i) => {
      return(
        <div className="movieItemContainer" key={i}>
          <ul className="list-group">
            <li className="list-group-item">
              <img src={movie.poster} alt="Movie Poster" height="25%" width="25%"/>
              <Link to={`/movies/${movie.title}`}><h3>{movie.title}</h3></Link>
              <button onClick={e => this.props.removeOnClick(movie.title)} type="button" className="btn movieItemBtn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
            </li>
          </ul>
        </div>
      );
    });
  }
}

export default MovieItem;
