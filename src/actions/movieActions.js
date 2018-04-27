import humps from 'lodash-humps'

export const REMOVE_MOVIE = 'REMOVE_MOVIE';

export const GET_MOVIE_START = 'GET_MOVIES_START';
export const GET_MOVIE_FAIL = 'GET_MOVIES_FAIL';
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';

export const ADD_MOVIE_START = 'GET_MOVIES_START';
export const ADD_MOVIE_FAIL = 'GET_MOVIES_FAIL';
export const ADD_MOVIE = 'ADD_MOVIE';

export const getMovieStart = () => ({ type: GET_MOVIE_START });
export const getMovieSuccess = (movie) => ({ type: GET_MOVIE_SUCCESS, movie });
export const getMovieFail = (error) => ({ type: GET_MOVIE_FAIL, error });

export const addMovieStart = () => ({ type: ADD_MOVIE_START });
export const addMovie = movie => ({ type: ADD_MOVIE, movie, });
export const addMovieFail = movie => ({ type: ADD_MOVIE_FAIL, movie, });

export const removeMovie = movie => ({
  type: REMOVE_MOVIE,
  movie,
});

export function getMovie(movieId) {
  return dispatch => {

    dispatch(getMovieStart())
    return fetch(`http://www.omdbapi.com/?apikey=ea1e135&i=${movieId}&plot=full`, {
    })
      .then((response) => response.json())
      .then((movie) => {
        const movieCamelCase = humps(movie)
        dispatch(getMovieSuccess(movieCamelCase))
      })
      .catch(error => { console.log('request failed', error); dispatch(getMovieFail(error)) });
  }

}

export function searchMovies(movieTitle) {

  return dispatch => {

    dispatch(addMovieStart())
    fetch(`http://www.omdbapi.com/?apikey=ea1e135&t=${movieTitle}`, {
    })
      .then((response) => response.json())
      .then((movie) => {
        const movieCamelCase = humps(movie)
        dispatch(addMovie(movieCamelCase))
      })
      .catch(error => { console.log('request failed', error); dispatch(addMovieFail(error)) });
    }
}