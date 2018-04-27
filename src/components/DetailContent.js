import React, { Component } from 'react';

const DetailContent = props => {
  console.log(props)
  return (
      <div className="movie_card" id="tomb">
        <img alt="poster" className="poster" src={props.movie.poster} />
        <div className="info_section">
          <div className="movie_header">
            <h1>{props.movie.title}</h1>
            <h4>{props.movie.year}, {props.movie.director}</h4>
            <span className="minutes">{props.movie.runtime}</span>
            <p className="type">{props.movie.genre}</p>
          </div>
          <div className="movie_desc">
            <p className="text">
              {props.movie.plot}
            </p>
          </div>
          <div className="movie_social">
            <p>Metascore: {props.movie.metascore}</p>
            <img alt="stars" className={"stars" + (props.movie.metascore > 69 ? '' : 'hidden')} src="./stars.png" />
          </div>
        </div>
      </div>
  );
}


export default DetailContent;
