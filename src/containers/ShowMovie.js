import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovie } from '../actions/movieActions'
import ShowMovieItem from '../components/ShowMovieItem';

class ShowMovie extends Component {

  constructor(props) {
    super(props)
    };

    componentDidMount() {
        this.props.getMovie(this.props.match.params.id)
    }

	render()  {
            return(
                <ShowMovieItem movie={this.props.movie}/>
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