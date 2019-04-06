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


  render() {
    return (
      <div>
        <Search searchSubmit={this.searchSubmit} searchBarTextChange={this.searchBarTextChange}/>
        <Ratings />
        {this.state.currentReviews.map((review, index) => {
          return <Review key={index} review={review}/>
        })};
      </div>
    )
  }
}

export default App;
