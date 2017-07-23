import React from 'react';
// import { connect } from 'react-redux';
import FeedItem from './FeedItem.jsx';

class FeedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [
                        'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg',
                        'http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg'
                    ]
        };

        this.buildFeedList = this.buildFeedList.bind(this);
    }

    buildFeedList(photos) {
        return photos.map((photo, idx) => {
            return <FeedItem key={ `${photo}-idx`} image={ photo } />
        })
    }

    render() {
        return (
            <div>
                { this.buildFeedList(this.state.photos) }
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
