import React from 'react';

//In the render here, we will be passed in the ratings from
// the App state. From there, we want to get the avg rating.

class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }
/* 
What does our ratings component need to do?
It needs to be able to
1. Grab all the review ratings for each rating
2. Average out those reviews
3. Render those as stars on the page (but we'll start by rendering a number)

Approach:
Let's build out the functionality for just one type of rating.
Then refactor that into something reusable for each rating.
*/


  render() {
    return (
      <div>
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
