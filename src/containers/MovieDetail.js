import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovie } from '../actions/movieActions'
import DetailContent from '../components/DetailContent';
import PropTypes from 'prop-types';


class MovieDetail extends Component {

  componentDidMount() {
    this.props.getMovie(this.props.match.params.id)
  }

  render() {
    return (
      <DetailContent movie={this.props.movie} />
    )
  }

}

MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired,
};

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
)(MovieDetail);