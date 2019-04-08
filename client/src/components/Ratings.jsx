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
        <div className="rating accuracy">
          <div>Accuracy</div>
          <div>{this.createVisualStars(allAverageRatings.accuracy)}</div>
        </div>
        <div className="rating location">
          <div>Location</div>
          <div>{this.createVisualStars(allAverageRatings.location)}</div>
        </div>
        <div className="rating communication">
          <div>Communication</div>
          <div>{this.createVisualStars(allAverageRatings.communication)}</div>
        </div>
        <div className="rating checkin">
          <div>Check-In</div>
          <div>{this.createVisualStars(allAverageRatings.checkin)}</div>
        </div>
        <div className="rating cleanliness">
          <div>Cleanliness</div>
          <div>{this.createVisualStars(allAverageRatings.cleanliness)}</div>
        </div>
        <div className="rating value">
          <div>Value</div>
          <div>{this.createVisualStars(allAverageRatings.value)}</div>
        </div>
      </div>
    );
  }
}

export default Ratings;
