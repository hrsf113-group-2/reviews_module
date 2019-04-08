import React from 'react';
import styles from './Ratings.css';

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
      <div className="sub-ratings">
        <div className="rating accuracy">Accuracy {this.createVisualStars(allAverageRatings.accuracy)}</div>
        <div className="rating communication">Communication {this.createVisualStars(allAverageRatings.communication)}</div>
        <div className="rating cleanliness">Cleanliness {this.createVisualStars(allAverageRatings.cleanliness)}</div>
        <div className="rating location">Location {this.createVisualStars(allAverageRatings.location)}</div>
        <div className="rating checkin">Check-In {this.createVisualStars(allAverageRatings.checkin)}</div>
        <div className="rating value">Value {this.createVisualStars(allAverageRatings.value)}</div>
      </div>
    );
  }
}

export default Ratings;
