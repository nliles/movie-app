import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MovieItem extends Component {

  render() {
    return this.props.movies.map((movie, i) => {
      console.log(movie)
      return(
        <div className="movieItemContainer" key={i}>
          <ul className="list-group">
            <li className="list-group-item">
              <img src={movie.poster} alt="Movie Poster" height="20%" width="20%"/>
              <div className="movieItemContent">
                  <Link to={`/movies/${movie.title}`}><h3>{movie.title} - {movie.year}</h3></Link>
                  <p>{movie.plot}</p>
                  <p>Genre: {movie.genre}</p>
              </div>
              <button onClick={e => this.props.removeOnClick(movie.title)} type="button" className="btn movieItemBtn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
            </li>
          </ul>
        </div>
      );
    });
  }
}

export default MovieItem;
