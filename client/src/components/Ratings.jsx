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
    return (
      <div>
        TEST OF FULL STAR RENDERING {this.createVisualStars(this.props.calculateAverageRating('rating-accuracy'))}
        <div>Accuracy {this.props.calculateAverageRating('rating-accuracy')}</div>
        <div>Communication {this.props.calculateAverageRating('rating-communication')}</div>
        <div>Cleanliness {this.props.calculateAverageRating('rating-cleanliness')}</div>
        <div>Location {this.props.calculateAverageRating('rating-location')}</div>
        <div>Check-In {this.props.calculateAverageRating('rating-check-in')}</div>
        <div>Value {this.props.calculateAverageRating('rating-value')}</div>
      </div>
    )
  }
};

export default Ratings;
