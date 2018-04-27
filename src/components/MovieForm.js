
import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';

class MovieForm extends Component {

    constructor() {
        super();
        this.state = {
            movieTerm: ""
        };                   
      }

    handleChange(e) {
        const value = e.target.value;
        this.setState({movieTerm: value})
    }

    clearForm(e) {
        this.setState({movieTerm: ""})
    }

    render() {
            return(
               <Form className="flex_container" onSubmit={e => {this.props.handleSubmit(e, this.state.movieTerm); this.clearForm(e)}}>
                   <Input onChange={e => this.handleChange(e)} type="text" placeholder="Add a movie..." value={this.state.movieTerm}/>
                   <button type="submit" className="btn"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
               </Form>
          ) 
    }
    
}

export default MovieForm