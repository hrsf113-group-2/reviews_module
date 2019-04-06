import React from 'react';
class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  /* 
  I have the number of stars/half stars I want. So create a function that takes that number, and turns that into ★★★★★
  createVisualStars should be a function held in App component b/c we need to use it for MainRatings as well.
  It's kind of annoying to be honest. I could just create the same function twice (once here and once in MainRating).

  */

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


    return fullStars + halfStar;
  }


  render() {
    return (
      <div>
        <div>TEST OF FULL STAR RENDERING {this.createVisualStars(this.props.calculateAverageRating('rating-accuracy'))}</div>
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
