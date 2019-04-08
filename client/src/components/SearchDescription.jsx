import React from 'react';

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
        <div className="search-description">
          <p>{this.props.searchedReviews.length} of our guests have mentioned "{this.props.currentSearchTerm}"</p>
          <div className="back-button" onClick={this.props.backToAllReviews}>Back to all reviews</div>
        </div>
    );
  }
}

export default SearchDescription;
