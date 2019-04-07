import React from 'react';

/* What should this component do?
1. It should grab the ratings from App state.
2. It should calculate an average of those, and go to the nearest .5 rating.
3. It should render stars based on that rating

ALSO
1. it should count the number of reviews we have.


*/
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
        <span>{this.props.numberOfReviews} Reviews</span>
        <span>Total Average Rating: {this.calculateTotalAverage(this.props.allAverageRatings)}</span>
      </div>
    )
  }
};

export default MainRating;
