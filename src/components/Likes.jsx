import React from 'react';
// import { connect } from 'react-redux';
// import { toggleLike } from '../redux/actionCreators';

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // create a function called handleButtonClick that will toggle your state on and off
    // remember setState accepts a callback function, the first argument is the previous state
  handleButtonClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    });
  }

  // create a button that toggles 'On' and 'Off'
  render() {
    return (
      <div className="Likes">
      	<span>{ this.state.count } likes</span>
 				<span className="Likes-like-button">
        	<button onClick={ this.handleButtonClick }>Like</button>
	 			</span>
      </div>
    )
  }
}

export default Likes;

// const Likes = ({ totalLikes, handleLikeButtonClick, userLiked}) => {
// 	return (
// 		<div className="Likes">
// 			<span>{ totalLikes } likes</span>
// 			<span className="Likes-like-button" onClick={handleLikeButtonClick}>
// 				{userLiked ? 'Unlike' : 'Like'}
// 			</span>
// 		</div>
// 	);
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
// 	return {
// 		handleLikeButtonClick: () => {
// 			dispatch(toggleLike(ownProps.id));
// 		}
// 	};
// };

// export default connect(null, mapDispatchToProps)(Likes);