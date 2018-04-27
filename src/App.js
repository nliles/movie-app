import React, { Component } from 'react';
import './App.css';
import MovieList from './containers/MovieList';

class App extends Component {
  render() {
    return (
      <div className="container">  
        <MovieList/>
      </div>
    );
  }
}

export default App;
