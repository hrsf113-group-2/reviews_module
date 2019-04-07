import React from 'react';

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
