import React from 'react';


// create a class component that toggles a button on and off
  // add in your constructor
    // don't forget to call super!
    // set your initial state in here
    // don't forget to bind your functions to the correct 'this'!

class ButtonToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggledOn: true,
      count: 0
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // create a function called handleButtonClick that will toggle your state on and off
    // remember setState accepts a callback function, the first argument is the previous state
  handleButtonClick() {
    this.setState(prevState => {
      return {
        toggledOn: !prevState.toggledOn,
        count: prevState.count + 1
      }
    });
  }

  // create a button that toggles 'On' and 'Off'
  render() {
    return (
      <div className="ButtonToggle">
        <button onClick={ this.handleButtonClick }>{this.state.toggledOn ? 'Like' : 'Unlike'}>{ this.state.count }</button>
      </div>
    )
  }
}




// don't forget to export your component!
export default ButtonToggle;