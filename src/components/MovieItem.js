import React from 'react';
import { Link } from 'react-router-dom'
import {ListGroupItem } from 'reactstrap';

 const  MovieItem = ({ removeOnClick, movie }) => {
  return (<ListGroupItem>
    <img src={movie.poster} alt="Movie Poster" height="20%" width="20%" />
    <div className="item_content">
      <Link to={`/movies/${movie.imdbId}`}><h3>{movie.title} - {movie.year}</h3></Link>
      <p>{movie.plot}</p>
      <p>{movie.genre}</p>
    </div>
    <button onClick={e => removeOnClick(movie.title)} type="button" className="btn"><i className="fa fa-minus-circle" aria-hidden="true"></i></button>
  </ListGroupItem>)
}

export default MovieItem