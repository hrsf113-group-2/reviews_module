import React from 'react';
import Review from './review';
import styles from './SearchDescription.css';

class SearchDescription extends React.Component {
  render() {
    if (this.props.searchedReviews.length === 0) {
      return (
        <div className="search-description">
          <p>None of our guests have mentioned "{this.props.currentSearchTerm}"</p>
          <div className="back-button" onClick={this.props.backToAllReviews}>Back to all reviews</div>
        </div>
      );
    }
    return (
        <div>
          <div className="search-description">
            <p>{this.props.searchedReviews.length} of our guests have mentioned "{this.props.currentSearchTerm}"</p>
            <div className="back-button" onClick={this.props.backToAllReviews}>Back to all reviews</div>
          </div>
            {this.props.searchedReviews.map((review, index) => <Review key={index} review={review}/>)}
        </div>
    );
  }
}

export default SearchDescription;
