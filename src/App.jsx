import React from 'react';

import Header from './components/Header.jsx';
import Image from './components/Image.jsx';
import HelloWorld from './components/HelloWorld.jsx';
import ButtonToggle from './components/ButtonToggle.jsx';
import Form from './components/Form.jsx';

// write a functional component
// make it a div with a class name of App
class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header />
        <Image imageURL="https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg" />
        <HelloWorld />
        <ButtonToggle />
        <Form />
      </div>
    )
  }
}

// don't forget to export your component!
export default App;