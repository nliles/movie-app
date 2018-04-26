import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MovieItem extends Component {

  render() {
      return(
        <div>
         <h1>{this.movie.title}</h1>
        </div>
      );
  }
}

export default MovieItem;
