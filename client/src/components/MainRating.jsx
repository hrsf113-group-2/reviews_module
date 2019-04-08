import React from 'react';
class MainRating extends React.Component {
  constructor(props) {
    super(props);

    this.calculateTotalAverage = this.calculateTotalAverage.bind(this);
  }

  calculateTotalAverage(averageRatings) {
    let ratingSum = 0;
    let numOfKeys = 0;
    for (let key in averageRatings) {
      ratingSum += averageRatings[key];
      numOfKeys += 1;
    }
    const totalAverage = ratingSum / numOfKeys;
    const nearestHalfRating = Math.ceil(totalAverage*2)/2;
    return nearestHalfRating;
  }

  render() {
    return (
      <div>
        <div>{this.props.numberOfReviews} Reviews</div>
        <div>Total Average Rating: {this.calculateTotalAverage(this.props.allAverageRatings)}</div>
      </div>
    )
  }
};

export default MainRating;
