import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ShowMovie from './components/ShowMovie';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/shows';
import { Route, Switch, HashRouter } from 'react-router-dom';

const preloadedState = {
    movies: []
};

const store = createStore(
  reducers,
  preloadedState,
);

render(
    <Provider store={store}>
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/movies/:id" component={ShowMovie}/>
        </Switch>
      </div>
    </HashRouter>
    </Provider>,
    document.getElementById('main'),
  );
