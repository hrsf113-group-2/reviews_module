import React from 'react';
import ReviewText from './ReviewText';
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
      <div>
        <img src={this.props.review.avatar}></img>
        <div>{this.props.review.name}</div>
        <div>{currentMonthName} {currentYear}</div>
        <ReviewText reviewText={this.props.review.text}/>
      </div>
    );
  }
}


export default Review;
