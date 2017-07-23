import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render () {
    return (
      <ul className="Header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    )
  }
}

export default Header;