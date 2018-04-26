
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
               <form className="flexContainer" onSubmit={e => this.handleSubmit(e)}>
                   <input className="inputField form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => this.handleChange(e)} type="text" placeholder="Add a movie..." value={this.state.movieTerm}/>
                   <button type="submit" class="btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
               </form>
          ) 
    }
    
}

export default connect(
    null,
    mapDispatchToProps
  )(AddMovie)