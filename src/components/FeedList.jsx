import React from 'react';
// import { connect } from 'react-redux';
import FeedItem from './FeedItem.jsx';

class FeedList extends React.Component {
    constructor(props) {
        super(props);

        this.buildFeedList = this.buildFeedList.bind(this);
    }

    buildFeedList(photos) {
        return photos.map((photo, idx) => {
            return <FeedItem key={ `${photo}-${idx}`} image={ photo.url } />
        })
    }

    render() {
        return (
            <div>
                { this.buildFeedList(this.props.photos) }
            </div>
        )
    }
}

export default FeedList;


// const FeedList = ({ photos }) => {
//     return (
//         <div className="FeedList">
//             {
//                 photos.map((photo, i) => {
//                     return (
//                         <FeedItem
//                             key={`${photo.url}-${i}`}
//                             photo={photo}
//                         />
//                     );
//                 })
//             }
//         </div>
//     );
// };

// const mapStateToProps = (state) => {
//     return {
//         photos: state.photos
//     };
// };

// export default connect(mapStateToProps)(FeedList);
