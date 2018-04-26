
import React, { Component } from 'react';
import { addMovie } from '../actions/movieActions'
import { bindActionCreators } from 'redux' 
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


  const mapDispatchToProps = dispatch => bindActionCreators({
    addMovie, 
  }, dispatch)

class AddMovie extends Component {

	static propTypes = {
        addMovie: PropTypes.func.isRequired,
    }

    constructor() {
        super();
        this.state = {
            movieTerm: ""
        };                   
      }

    componentDidMount() {

    } 

    handleSubmit(e) {
        e.preventDefault();
        fetch(`http://www.omdbapi.com/?apikey=ea1e135&t=${this.state.movieTerm}`)
        .then((response) => response.json())
        .then((movie) => {
            this.props.addMovie(movie)
        })
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({movieTerm: value})
    }

    render() {
            return(
              <div className="addContainer">
               <form onSubmit={e => this.handleSubmit(e)}>
                   <input onChange={e => this.handleChange(e)} type="text" placeholder="Add a movie"/>
                   <input type="submit" id="add" className="btn btn-primary" value="Add"/>
               </form>
              </div>
          ) 
    }
    
}

export default connect(
    null,
    mapDispatchToProps
  )(AddMovie)