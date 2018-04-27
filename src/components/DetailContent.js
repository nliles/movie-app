import React from 'react';

const DetailContent = props => {
  return (
      <div className="movie_card">
        <img alt="poster" className="content_poster" src={props.movie.poster} />
        <div className="info_section">
          <div className="content_header">
            <h1 className="content_title">{props.movie.title}</h1>
            <h4 className="content_detail">{props.movie.year}, {props.movie.director}</h4>
            <span className="minutes">{props.movie.runtime}</span>
            <p className="type">{props.movie.genre}</p>
            <div className="movie_score">
            <img alt="stars" className={"stars " + (props.movie.metascore > 69 ? '' : 'hidden')} src="./stars.png" />
          </div>
          </div>
          <div className="movie_desc">
            <p className="text">
              {props.movie.plot}
            </p>
          </div>
        </div>
      </div>
  );
}


export default DetailContent;
