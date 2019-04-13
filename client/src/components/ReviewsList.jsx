import React from 'react';
import Review from './review';
import Pagination from './Pagination'

class ReviewsList extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPage: 1,
      reviewsPerPage: 5,
    };
  }

  render() {
    const { currentReviews } = this.props;
    const { currentPage, reviewsPerPage } = this.state;
    return (
      <div>
        {currentReviews.map((review, index) => <Review key={index} review={review}/>)}
        <Pagination currentPage={currentPage} reviewsPerPage={reviewsPerPage}/>
      </div>
    );
  }
}

export default ReviewsList;
