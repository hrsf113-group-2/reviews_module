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

  createVisualStars(ratingValue) {
    const percentageOfStars = ratingValue * 20;
    const classNamePercentage = 'stars-' + percentageOfStars;
    const classNames = 'full-star ' + classNamePercentage;
    return (
        <div 
        className={classNames}>
          ★★★★★
        </div>
    )
  }

  render() {
    const totalAverage = this.calculateTotalAverage(this.props.allAverageRatings);
    return (
      <div>
        <div>{this.props.numberOfReviews} Reviews</div>
        <div>{this.createVisualStars(totalAverage)}</div>
      </div>
    )
  }
};

export default MainRating;
