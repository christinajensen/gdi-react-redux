import React from 'react';

// write a stateless functional component for the header
// make it an unordered list, with two list elements. One should have the text Home, the other Profile
// be sure to include the classname 'Header' to get the correct styles

class Header extends React.Component {
  render () {
    return (
      <ul className="Header">
        <li>Home</li>
        <li>Profile</li>
      </ul>
    )
  }
}

// don't forget to export your component!
export default Header;