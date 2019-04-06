import React from 'react';
<<<<<<< HEAD
import styles from './Ratings.css';
=======
import styles from './Ratings.css'
>>>>>>> Modify styling of Ratings
class Ratings extends React.Component {
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
    );
  }
}

export default Ratings;
