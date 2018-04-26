import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import List from './components/ListMovies';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <List />
      </div>
    );
  }
}

export default App;
