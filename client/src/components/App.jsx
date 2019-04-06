import React from 'react';
import ReactDOM from 'react-dom';
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
    axios('http://localhost:3000/locations/1/reviews')
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
    /* Explanation: given the rating-______,
       I want to check every single review for the rating at that key.
       Add those all together. Then divide them by the number of reviews there are/we've checked. 
       That will be our average rating. Let that render in ratings component.
    */
    let combinedRatingTotal = 0;
    let numberOfReviews = this.state.allReviews.length;
    for (let i = 0; i < numberOfReviews; i += 1) {
        combinedRatingTotal += this.state.allReviews[i][ratingCategory];
      }
    return (combinedRatingTotal / numberOfReviews);
      // divide the combinedRatingTotal by our numberOfReviews -> this is the length
      // that is the average rating. return it
  }

  render() {
    return (
      <div>
        <Search searchSubmit={this.searchSubmit} searchBarTextChange={this.searchBarTextChange}/>
        <Ratings calculateAverageRating={this.calculateAverageRating}/>
        {this.state.currentReviews.map((review, index) => {
          return <Review key={index} review={review}/>
        })};
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
