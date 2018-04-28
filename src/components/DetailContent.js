import React from 'react';

const DetailContent = props => {
  return (
      <div className="movie-card">
        <img alt="poster" className="content-poster" src={props.movie.poster} />
        <div className="info-section">
          <div className="content-header">
            <h1 className="content-title">{props.movie.title}</h1>
            <h4 className="content-detail">{props.movie.year}, {props.movie.director}</h4>
            <span className="minutes">{props.movie.runtime}</span>
            <p className="type">{props.movie.genre}</p>
            <div className="movie-score">
            <img alt="stars" className={"stars " + (props.movie.metascore > 69 ? '' : 'hidden')} src="./stars.png" />
          </div>
          </div>
          <div className="movie-desc">
            <p className="text">
              {props.movie.plot}
            </p>
          </div>
        </div>
      </div>
  );
}


export default DetailContent;
