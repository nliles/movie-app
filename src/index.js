import React from 'react';
import './index.css';
import App from './App';
import MovieDetail from './containers/MovieDetail';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import store from './store/configureStore'

render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/movies/:id" component={MovieDetail} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('main'),
);
