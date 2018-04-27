import { SET_MOVIES, ADD_MOVIE, GET_MOVIE, REMOVE_MOVIE } from '../actions/movieActions';

const initialState = {
  movies: [],
  movie: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: state.movies.concat(action.movie),
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: state.movies.find(movie => movie.title === action.movie),
      };
    case REMOVE_MOVIE:
    const removeMovieArray = state.movies.slice();
    const movie = state.movies.find(movie => movie.title === action.movie)
    const index = state.movies.slice().indexOf(movie)
    removeMovieArray.splice(index, 1);
    return {
      ...state,
      movies: removeMovieArray,
    };
    default:
      return state;
  }
}




