import React from 'react';
class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const months = [
      'January', 'February', 'March', 'April', 'May',
      'June', 'July', 'August', 'September', 'October',
      'November', 'December'
  ]
    
    const dateObject = new Date(this.props.review.date);
    const currentYear = dateObject.getFullYear();
    const currentMonthNum = dateObject.getMonth();
    const currentMonthName = months[currentMonthNum];
    

    return (
      <div>
        <img src={this.props.review.avatar}></img>
        <div>{this.props.review.name}</div>
        <div>{currentMonthName} {currentYear}</div>
        <p>{this.props.review.text}</p>
      </div>
    )
  }
}


export default Review;