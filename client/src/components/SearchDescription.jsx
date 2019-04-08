import React from 'react';

/* I want this component to conditioanlly render based on whether there's a matching search term
Also conditionally render when we have searched.
So it needs to know the following:
1. We have submitted a search
2. Whether that search returned at least 1 review.

*/

class SearchDescription extends React.Component {

  render() {
    if (this.props.searchedReviews.length === 0) {
      return (
        <div>
          <p>None of our guests have mentioned "{this.props.currentSearchTerm}"</p>
          <div onClick={this.props.backToAllReviews}>Back to all reviews</div>
        </div>
      );
    }
    return (
        <div>
          <p>{this.props.searchedReviews.length} of our guests have mentioned "{this.props.currentSearchTerm}"</p>
          <div onClick={this.props.backToAllReviews}>Back to all reviews</div>
        </div>
    )
  }
}

export default SearchDescription;
