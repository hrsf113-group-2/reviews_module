import React from 'react';
<<<<<<< HEAD
import ReviewText from './ReviewText';
=======
import styles from './Review.css';
>>>>>>> Configure webpack to allow for css-styles, change review text to blue as a confirmation of correct functionality
class Review extends React.Component {
  render() {
    const months = [
      'January', 'February', 'March', 'April', 'May',
      'June', 'July', 'August', 'September', 'October',
      'November', 'December',
    ];

    const dateObject = new Date(this.props.review.date);
    const currentYear = dateObject.getFullYear();
    const currentMonthNum = dateObject.getMonth();
    const currentMonthName = months[currentMonthNum];

    return (
      <div className="full-review">
        <img className="avatar" src={this.props.review.avatar}></img>
        <div className="name">{this.props.review.name}</div>
        <div className="date">{currentMonthName} {currentYear}</div>
        <ReviewText reviewText={this.props.review.text}/>
      </div>
    );
  }
}


export default Review;
