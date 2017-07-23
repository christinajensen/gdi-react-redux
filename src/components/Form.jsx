import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    this.setState({
      userInput: value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.userInput);
    this.setState({
      userInput: ''
    });
  }

  render () {
    return (
      <form className="Form">
        <input placeholder="Enter URL" value={ this.state.userInput } onChange={ this.handleInputChange }></input>
        <button onClick={ this.handleFormSubmit }>Submit</button>
      </form>
    )
  }
}

export default Form;