
import React, { Component } from 'react';
import Add from '../components/Add';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
      movies: state.movies
    };
  }

class ListMovies extends Component {

	constructor(props) {
		super(props);
	}

	render() {
        console.log(this.props);
        const movieArray = this.props.movies.map((movie, i) => {
            return(
              <div key={i}>
                <Link to={`/movies/${movie.Title}`}><h3>{movie.Title}</h3></Link>
                <img src={movie.Poster} alt="Movie Poster" height="42" width="42"/>
              </div>
            );
          });
            return(
              <div>
                <h2>My Movies</h2><br/>
                <Add/>
                    <div>
                        {movieArray}
                    </div>
              </div>
          ) 
        }
    
}
export default connect(
    mapStateToProps,
    null
  )(ListMovies)