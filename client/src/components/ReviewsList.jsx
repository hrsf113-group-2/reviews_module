import React from 'react';
import Review from './review';

class ReviewsList extends React.Component {
  render() {
    return (
      <div>
        {this.props.currentReviews.map((review, index) => <Review key={index} review={review}/>)}
      </div>
    );
  }
}

export default ReviewsList;
