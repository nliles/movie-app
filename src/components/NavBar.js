import React, { Component } from 'react';

class List extends Component {

    render() {
            return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <img src="./popcorn.png" height="42" width="42"/>
                <a className="navbar-brand" href="/">Movies</a>
            </div>
            </nav>
          ) 
    }
    
}

export default List;