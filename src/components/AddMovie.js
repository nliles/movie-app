
import React, { Component } from 'react';
import { searchMovies } from '../actions/movieActions'
import { bindActionCreators } from 'redux' 
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


  const mapDispatchToProps = dispatch => bindActionCreators({
    searchMovies, 
  }, dispatch)

class AddMovie extends Component {

	static propTypes = {
        searchMovies: PropTypes.func.isRequired,
    }

    constructor() {
        super();
        this.state = {
            movieTerm: ""
        };                   
      }

    handleSubmit(e) {
        e.preventDefault();
        this.props.searchMovies(this.state.movieTerm)
        this.setState({ movieTerm: ""});
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({movieTerm: value})
    }

    render() {
            return(
              <div className="addContainer">
               <form onSubmit={e => this.handleSubmit(e)}>
                   <input onChange={e => this.handleChange(e)} type="text" placeholder="Add a movie" value={this.state.movieTerm}/>
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