import React from 'react';

/* 
If the number of characters in this.props.reviewText < 250
  Just render the review
If not
  Then for now render 'less than 250 characters'
*/

class ReviewText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    const currentReviewText = this.props.reviewText;
    if (currentReviewText.length < 250) {
      return (
        <p>
          {this.props.reviewText}
        </p>
      )
    } else {
      return (
        <p>
          This review has over 250 characters.
        </p>
      )
    }
  }
}

export default ReviewText;
