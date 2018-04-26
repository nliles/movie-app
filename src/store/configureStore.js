
// import {createStore, applyMiddleware} from "redux";
// import reducers from '../reducers/movies';
// import thunk from 'redux-thunk';

// const defaultState = {
//     movies: [],
//     movie: {}
// };

// const store = createStore(reducers, defaultState, applyMiddleware(thunk));

// if(module.hot) {
//   module.hot.accept('../reducers',() => {
//     const nextRootReducer = require('../reducers/movies').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

// export default store;