import React from 'react';

class ButtonToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggledOn: false
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState((prevState, props) => { // setState takes in 2 callbacks: prevState and props
      return {
        toggledOn: !prevState.toggledOn
      }
    });
  }

  render() {
    return (
      <div className="ButtonToggle">
        <button onClick={ this.handleButtonClick }>{ this.state.toggledOn ? 'On' : 'Off' }</button>
      </div>
    )
  }
}

export default ButtonToggle;