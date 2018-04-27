import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MovieItem extends Component {

  render() {
      return(
    <div class="container">
      <div class="movie_card" id="tomb">
      <img class="poster" src={this.props.movie.poster}/>
        <div class="info_section">
          <div class="movie_header">
            <h1>{this.props.movie.title}</h1>
            <h4>{this.props.movie.year}, {this.props.movie.director}</h4>
            <span class="minutes">{this.props.movie.runtime}</span>
            <p class="type">{this.props.movie.genre}</p>
          </div>
          <div class="movie_desc">
            <p class="text">
              {this.props.movie.plot}
            </p>
          </div>
          <div class="movie_social">
            <p>Metascore: {this.props.movie.metascore}</p>
            <img className={"stars" + (this.props.movie.metascore > 69 ? '' : 'hidden')} src="./stars.png"/>
          </div>
        </div>
      </div>
    </div>
      );
  }
}

export default MovieItem;
