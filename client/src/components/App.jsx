import React from 'react';
import axios from 'axios';
<<<<<<< HEAD
<<<<<<< HEAD
import Search from './Search.jsx';
import Ratings from './Ratings.jsx';
import ReviewsList from './ReviewsList.jsx';
import MainRating from './MainRating.jsx';


=======
=======
>>>>>>> d36cb0da25a5752e032c9a05bcba7abb88b61434
import Search from './Search';
import Ratings from './Ratings';
import ReviewsList from './ReviewsList';
import MainRating from './MainRating';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Pass down numberOfReviews and allAverageRatings to MainRating.js
=======

>>>>>>> Add line between import and class definition
=======

>>>>>>> d36cb0da25a5752e032c9a05bcba7abb88b61434
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allReviews: [],
      currentReviews: [],
      currentSearchTerm: null,
      allAverageRatings: {},
    };
    this.searchSubmit = this.searchSubmit.bind(this);
    this.searchBarTextChange = this.searchBarTextChange.bind(this);
    this.calculateAverageRating = this.calculateAverageRating.bind(this);
    this.storeAllAverageRatings = this.storeAllAverageRatings.bind(this);
  }

  componentDidMount() {
    const component = this;
    axios('http://localhost:3000/locations/2/reviews')
      .then((location) => {
        component.setState(
          {
            allReviews: location.data.reviews,
            currentReviews: location.data.reviews,
          },
        );
      })
      .then(() => component.storeAllAverageRatings());
  }

  searchBarTextChange(e) {
    this.setState({
      currentSearchTerm: e.target.value,
    });
  }

  searchSubmit(e) {
    e.preventDefault();

    const selectedArray = [];
    for (let i = 0; i < this.state.allReviews.length; i += 1) {
      const currentReviewObject = this.state.allReviews[i];
      const currentReviewText = currentReviewObject.text;
      if (currentReviewText.includes(this.state.currentSearchTerm)) {
        selectedArray.push(this.state.allReviews[i]);
      }
    }

    this.setState(() => ({ currentReviews: selectedArray }));
  }

  calculateAverageRating(ratingCategory) {
    let combinedRatingTotal = 0;
    const numberOfReviews = this.state.allReviews.length;
    for (let i = 0; i < numberOfReviews; i += 1) {
      combinedRatingTotal += this.state.allReviews[i][ratingCategory];
    }
    const averageRating = combinedRatingTotal / numberOfReviews;
    const nearestHalfRating = Math.ceil(averageRating * 2) / 2;
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
      accuracy,
      communication,
      cleanliness,
      location,
      checkin,
      value,
    };
    this.setState({
      allAverageRatings,
    });
  }

  render() {
    if (this.state.currentReviews.length > 0) {
      return (
        <div>
          <Search searchSubmit={this.searchSubmit} searchBarTextChange={this.searchBarTextChange}/>
          <MainRating allAverageRatings={this.state.allAverageRatings} numberOfReviews={this.state.allReviews.length}/>
          <Ratings allAverageRatings={this.state.allAverageRatings}/>
          <ReviewsList currentReviews={this.state.currentReviews}/>
        </div>
      )
    }
    const currentTerm = this.state.currentSearchTerm;
    return (
      <div>
        <Search searchSubmit={this.searchSubmit} searchBarTextChange={this.searchBarTextChange}/>
        <Ratings allAverageRatings={this.state.allAverageRatings}/>
        <p>None of our guests have mentioned "{currentTerm}"</p>
        <div>Back to all reviews</div>
      </div>
    );
  }
}

export default App;
