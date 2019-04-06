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
    /*
     Given a rating value,
     Render the appropriate number of stars/halfstars

     Question: How do we render half stars?
       Solve this question first, b/c otherwise I can't render full stars appropriately.
       I think CSS can create a half star, so we should render full stars based off their floor. 
       Example: If our rating is 3.5, render 3 full stars (className=full-star).
       If there's a .5, render half a star (className=half-star)

       */

    //The below will only render the full stars.
    const numberOfFullStars = Math.floor(ratingValue);
    let fullStars = '';
    
    for (let i = 0; i < numberOfFullStars; i += 1) {
      fullStars += '★';
    }
    return fullStars;
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
