import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovie } from '../actions/movieActions'

class ShowMovie extends Component {

    componentDidMount() {
        this.props.getMovie(this.props.match.params.id)
    }

	render() {
        console.log(this.props.movie)
            return(
                <div>"test"</div>
          ) 

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