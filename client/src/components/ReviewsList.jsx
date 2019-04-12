import React from 'react';
import Review from './review';
import Pagination from './Pagination'

class ReviewsList extends React.Component {
  render() {
    return (
      <div>
        {this.props.currentReviews.map((review, index) => <Review key={index} review={review}/>)}
        <Pagination />
      </div>
    );
  }
}

export default ReviewsList;
