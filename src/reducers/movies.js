import { ADD_MOVIE_SUCCESS, REMOVE_MOVIE, GET_MOVIE_SUCCESS } from '../actions/movieActions';

export default function reducer(state = [], action) {

  switch (action.type) {
    case ADD_MOVIE_SUCCESS:
      const foundIndex = state.movies.findIndex(movie => movie.imdbId === action.movie.imdbId);
      if (foundIndex === -1) {
        return {
          ...state,
          movies: [action.movie, ...state.movies]
        };
      } else {
        return state;
      }
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.movie,
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




