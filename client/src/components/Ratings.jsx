import React from 'react';
class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  createVisualStars(ratingValue) {
    const numberOfFullStars = Math.floor(ratingValue);

    let fullStars = '';
    for (let i = 0; i < numberOfFullStars; i += 1) {
      fullStars += '★';
    };

    let halfStar = '';
    if ((ratingValue % 1) !== 0) {
      halfStar += '★'
    };

    return (
      <div>
        <div className="full-star">
          {fullStars}
        </div>
        <div className="half-star">
          {halfStar}
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
