import React from 'react';
import styles from './ReviewText.css';

class ReviewText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullRender: false,
    };
    this.readFullReview = this.readFullReview.bind(this);
  }

  readFullReview() {
    this.setState({
      fullRender: true,
    });
  }

  render() {
    const currentReviewText = this.props.reviewText;
    if (this.state.fullRender) {
      return (
        <p>
          {currentReviewText}
        </p>
      );
    }
    return (
      <div className="review-text">
        <p className="sub-text">{currentReviewText.substring(0,250)}...</p>
        <div className="read-more" onClick={this.readFullReview}>Read more</div>
      </div>
    );
  }
}

export default ReviewText;
