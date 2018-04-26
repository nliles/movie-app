import humps from 'lodash-humps'

export const SET_MOVIES = 'SET_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const GET_MOVIE = 'GET_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';


export const setMovies = movies => ({
  type: SET_MOVIES,
  movies,
});

export const addMovie = movie => ({
  type: ADD_MOVIE,
  movie,
});

export const getMovie = movie => ({
  type: GET_MOVIE,
  movie,
});

export const removeMovie = movie => ({
  type: REMOVE_MOVIE,
  movie,
});

export function searchMovies(movieTitle) {
  return dispatch =>
  fetch(`http://www.omdbapi.com/?apikey=ea1e135&t=${movieTitle}`, {
  })
  .then((response) => response.json())
    .then((movie) => {
      const movieCamelCase = humps(movie)
      dispatch(addMovie(movieCamelCase))
    })
    .catch(error => { console.log('request failed', error); });
}