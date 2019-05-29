import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

import Search from './Search';
import Ratings from './Ratings';
import ReviewsList from './ReviewsList';
import MainRating from './MainRating';
import SearchDescription from './SearchDescription';

import styles from './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allReviews: [],
      currentReviews: [],
      currentPageReviews: [],
      currentSearchTerm: '',
      allAverageRatings: {},
      isSearching: false,
    };
    this.searchSubmit = this.searchSubmit.bind(this);
    this.searchBarTextChange = this.searchBarTextChange.bind(this);
    this.calculateAverageRating = this.calculateAverageRating.bind(this);
    this.storeAllAverageRatings = this.storeAllAverageRatings.bind(this);
    this.backToAllReviews = this.backToAllReviews.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    const component = this;
    const locationID = window.location.pathname.split('/')[2];
    axios.get(`/api/locations/${locationID}/reviews`)
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
    this.setState(() => ({
      currentReviews: selectedArray,
      isSearching: true,
    }));
  }

  backToAllReviews() {
    this.setState({
      currentReviews: this.state.allReviews,
      isSearching: false,
      currentSearchTerm: '',
    });
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

  handlePageClick(page) {
    let currentPageMultiplier = page.selected;
    let currentPageReviews = [];
    let i = 5 * currentPageMultiplier;
    let loopEnd = i + 4;
    for ( i; i <= loopEnd; i++ ) {
      currentPageReviews.push(this.state.allReviews[i])
    }
    this.setState({currentPageReviews: currentPageReviews})
  }


  render() {
    const {
      isSearching, allAverageRatings, allReviews, currentReviews, currentSearchTerm,
    } = this.state;
    
    let bottomComponent;
    
    if (!isSearching) {
      bottomComponent = 
        <div>
          <Ratings allAverageRatings={allAverageRatings}/>
          <ReviewsList currentReviews={currentReviews}/>
          
      </div>
    } else {
      bottomComponent = 
      <SearchDescription
        searchedReviews={currentReviews}
        backToAllReviews={this.backToAllReviews}
        currentSearchTerm={currentSearchTerm}
      />
    }

      return (
        <div className="main-app">
          <div className="header">
            <MainRating
            className="main-rating"
            allAverageRatings={allAverageRatings}
            numberOfReviews={allReviews.length}/>
            <Search
            className="search"
            searchSubmit={this.searchSubmit}
            searchBarTextChange={this.searchBarTextChange}/>
          </div>
          {bottomComponent}
          <ReactPaginate
            className="pagination-component"
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      );
  }
}

export default App;
