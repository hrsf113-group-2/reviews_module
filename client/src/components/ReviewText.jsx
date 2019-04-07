import React from 'react';

/* 
If the number of characters in this.props.reviewText < 250
  Just render the review
If not
  Then I should only render a part of the string (up to those 250 characters) as well have a clickable
  text called "Read more"

*/

class ReviewText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullRender: false,
    }
    this.readFullReview = this.readFullReview.bind(this);
  }



  readFullReview() {
    this.setState({
      fullRender: true,
    })
  }

  render() {
    const currentReviewText = this.props.reviewText;
    if (this.state.fullRender) {
      // if this is true, just render full text
      return (
        <p>
          {currentReviewText}
        </p>
      )
    } else {
      return (
      <div>
        <p>{currentReviewText.substring(0,250)}...</p>
        <span onClick={this.readFullReview}>Read more</span>
      </div>
      )
    }
  }
}

export default ReviewText;
