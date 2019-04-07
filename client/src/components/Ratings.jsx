import React from 'react';
class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  createVisualStars(ratingValue) {
    // CURRENT FUNCTIONALITY: 
    // WILL RENDER CORRECT NUMBER OF FULL STARS
    // WILL RENDER A FULL STAR IF THERE'S A HALF STAR
    // NEED TO ADD CLASSES TO THE FULL STARS AND THE HALF STARS SO I CAN DRAW THEM SEPERATELY

    const numberOfFullStars = Math.floor(ratingValue);

    let fullStars = '';
    for (let i = 0; i < numberOfFullStars; i += 1) {
      fullStars += '★';
    };

    let halfStar = '';
    if ((ratingValue % 1) !== 0) {
      halfStar += '★'
    };

    // stars now have their own individual classes, find out how to append the half star to the end of the full star.
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
