import React from 'react';
import axios from 'axios';
import Review from './review';
import Search from './Search';
import Ratings from './Ratings';
import ReviewsList from './ReviewsList';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allReviews: [],
      currentReviews: [],
      currentSearchTerm: null,
      allAverageRatings: null,
    }
    this.searchSubmit = this.searchSubmit.bind(this);
    this.searchBarTextChange = this.searchBarTextChange.bind(this);
    this.calculateAverageRating = this.calculateAverageRating.bind(this);
    this.storeAllAverageRatings = this.storeAllAverageRatings.bind(this);
  }
  
  componentDidMount() {
    const component = this; 
    axios('http://localhost:3000/locations/2/reviews')
    .then(location => {
      component.setState(
        {allReviews: location.data.reviews,
         currentReviews: location.data.reviews,
        }
      )
    })
    .then(() => this.storeAllAverageRatings())
  };

  searchBarTextChange(e) {
    this.setState({
      currentSearchTerm: e.target.value
    });
  }

  searchSubmit(e) { 
    e.preventDefault();
    
    const selectedArray = [];
    for (let i = 0; i < this.state.allReviews.length; i++) {
      let currentReviewObject = this.state.allReviews[i];
      let currentReviewText = currentReviewObject.text;
      if (currentReviewText.includes(this.state.currentSearchTerm)) { // make sure e.target.value is the actual text
        selectedArray.push(this.state.allReviews[i]); 
      }
    };

    this.setState(() => {
      return {currentReviews: selectedArray}
    });
  }

  calculateAverageRating(ratingCategory) {
    let combinedRatingTotal = 0;
    let numberOfReviews = this.state.allReviews.length;
    for (let i = 0; i < numberOfReviews; i += 1) {
      combinedRatingTotal += this.state.allReviews[i][ratingCategory];
    }
    const averageRating = combinedRatingTotal / numberOfReviews;
    const nearestHalfRating = Math.ceil(averageRating*2)/2
    return nearestHalfRating;
  }

  storeAllAverageRatings() {
    const accuracy = this.calculateAverageRating('rating-accuracy');
    const communication = this.calculateAverageRating('rating-communication');
    const cleanliness = this.calculateAverageRating('rating-cleanliness');
    const location = this.calculateAverageRating('rating-location');
    const checkin = this.calculateAverageRating('rating-check-in');
    const value = this.calculateAverageRating('rating-value');
    const allAverageRatings = {
      accuracy: accuracy,
      communication: communication,
      cleanliness: cleanliness,
      location: location,
      checkin: checkin,
      value: value,
    }
    this.setState({
      allAverageRatings: allAverageRatings,
    })
  }
  
  render() {

    if (this.state.currentReviews.length > 0) {
      return (
        <div>
          <Search searchSubmit={this.searchSubmit} searchBarTextChange={this.searchBarTextChange}/>
          <Ratings />
          <ReviewsList currentReviews={this.state.currentReviews}/>
        </div>
      )
    } else {
      const currentTerm = this.state.currentSearchTerm;
      return(
        <div>
          <Search searchSubmit={this.searchSubmit} searchBarTextChange={this.searchBarTextChange}/>
          <Ratings />
          <p>None of our guests have mentioned "{currentTerm}"</p>
          <div>Back to all reviews</div>
        </div>
      )
    }
  }
}

export default App;
