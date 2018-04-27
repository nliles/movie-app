
import {createStore, applyMiddleware} from "redux";
import reducers from '../reducers/movies';
import thunk from 'redux-thunk';

const defaultState = {
    movies: [],
    movie: {}
};

const store = createStore(reducers, defaultState, applyMiddleware(thunk));

export default store;