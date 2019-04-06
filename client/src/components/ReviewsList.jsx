import React from 'react';
import Review from './review';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.currentReviews.map((review, index) => {
          return <Review key={index} review={review}/>
        })}
      </div>
    )
  }
}

export default ReviewsList;
