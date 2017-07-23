import React from 'react';

class Image extends React.Component {
  render () {
    return (
      <img className="Image" src={ this.props.imageURL } />
    )
  }
}

export default Image;