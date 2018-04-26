import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovie } from '../actions/movieActions'
import ShowMovieItem from '../components/ShowMovieItem';

class ShowMovie extends Component {

    componentWillMount() {
        this.props.getMovie(this.props.match.params.id)
    }

    componentWillReceiveProps = (nextProps) => {
      console.log(nextProps)
    }
    

	render() {
        if(this.props.movie) {
            return(
                <h1>"hi"</h1>
          ) 
        }
   }
    
}

const mapStateToProps = (state) => {
    return {
      movie: state.movie
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovie, 
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowMovie);