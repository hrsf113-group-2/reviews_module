import React from 'react';
import axios from 'axios';
import Review from './review';
import Search from './Search';
import Ratings from './Ratings';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allReviews: [],
      currentReviews: [],
      currentSearchTerm: null,
    }
    this.searchSubmit = this.searchSubmit.bind(this);
    this.searchBarTextChange = this.searchBarTextChange.bind(this);
    this.calculateAverageRating = this.calculateAverageRating.bind(this);
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
    });
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
      return  {currentReviews: selectedArray}
    });
  }

  calculateAverageRating(ratingCategory) {
    let combinedRatingTotal = 0;
    let numberOfReviews = this.state.allReviews.length;
    for (let i = 0; i < numberOfReviews; i += 1) {
      combinedRatingTotal += this.state.allReviews[i][ratingCategory];
    }
    const averageRating = combinedRatingTotal / numberOfReviews;
    const averageRatingToClosestHalfRating = Math.ceil(averageRating*2)/2
    return averageRatingToClosestHalfRating;
  }

  render() {
    if (this.state.currentReviews.length > 0) {
      return (
        <div>
          <Search searchSubmit={this.searchSubmit} searchBarTextChange={this.searchBarTextChange}/>
          <Ratings />
          {this.state.currentReviews.map((review, index) => {
            return <Review key={index} review={review}/>
          })}
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
