import React from 'react';
import styles from './Ratings.css';
class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

// How the second class works
/*
10 = .5
20 = 1
30 = 1.5
40 = 2
50 = 2.5
60 = 3
70 = 3.5
80 = 4
90 = 4.5
100 = 5
*/
  createVisualStars(ratingValue) {
    const percentageOfStars = ratingValue * 20;
    const classNamePercentage = 'stars-' + percentageOfStars;
    console.log(classNamePercentage)
    return (
      <div>
        <div 
          className='full-star'
          className={classNamePercentage}>
          ★★★★★
        </div>
      </div>
    )
  }


  render() {
    const { allAverageRatings } = this.props;
    return (
      <div>
        <div>Accuracy {this.createVisualStars(allAverageRatings.accuracy)}</div>
        <div>Communication {this.createVisualStars(allAverageRatings.communication)}</div>
        <div>Cleanliness {this.createVisualStars(allAverageRatings.cleanliness)}</div>
        <div>Location {this.createVisualStars(allAverageRatings.location)}</div>
        <div>Check-In {this.createVisualStars(allAverageRatings.checkin)}</div>
        <div>Value {this.createVisualStars(allAverageRatings.value)}</div>
      </div>
    )
  }
};

export default Ratings;
