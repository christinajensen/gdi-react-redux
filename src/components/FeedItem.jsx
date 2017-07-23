import React from 'react';
import Image from './Image.jsx';
import Likes from './Likes.jsx';

class FeedItem extends React.Component {
  render() {
    return (
      <div className="FeedItem">
        <Image imageURL={ this.props.image } />
        <Likes />
      </div>
    )
  }
}

// const FeedItem = ({ photo }) => {
//   const { url, likes, id, userLiked } = photo;
//   return (
//     <div className="FeedItem">
//       <Image url={url} />
//       <Likes totalLikes={likes} id={id} userLiked={userLiked} />
//     </div>
//   );
// };

export default FeedItem;