import { SET_MOVIES, ADD_MOVIE } from '../actions/movieActions';

const initialState = {
  movies: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES:
      return {
        movies: action.movies,
      };
    case ADD_MOVIE:
    console.log(action)
      return {
        movies: state.movies.concat(action.movie),
      };
    default:
      return state;
  }
}
