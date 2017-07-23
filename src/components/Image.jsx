import React from 'react';

// write a stateless functional component that takes in a url as a prop, and renders the image with that url
// be sure to give it a class name "Image" to get the proper styling

class Image extends React.Component {
  render () {
    return (
      <img className="Image" src={ this.props.imageURL } />
    )
  }
}

export default Image;