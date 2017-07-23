import React from 'react';

import HelloWorld from '../components/HelloWorld.jsx';
import ButtonToggle from '../components/ButtonToggle.jsx';

// create a ProfilePage component here
class ProfilePage extends React.Component {
  render () {
    return (
      <div>
        My Profile Page!!
        <HelloWorld />
        <ButtonToggle />
      </div>
    )
  }
}

export default ProfilePage;