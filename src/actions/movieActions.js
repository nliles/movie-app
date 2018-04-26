export const SET_MOVIES = 'SET_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';

export const setMovies = movies => ({
  type: SET_MOVIES,
  movies,
});

// Action Creators
export const addMovie = movie => ({
  type: ADD_MOVIE,
  movie,
});