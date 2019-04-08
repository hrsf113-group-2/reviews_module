import React from 'react';

/* I want this component to conditioanlly render based on whether there's a matching search term
Also conditionally render when we have searched.
So it needs to know the following:
1. We have submitted a search
2. Whether that search returned at least 1 review.

*/

class SearchDescription extends React.Component {
  render() {
    return (
      <div>
        <p>None of our guests have mentioned "{this.props.currentSearchTerm}"</p>
        <div>Back to all reviews</div>
      </div>
    );
  }
}

export default SearchDescription;
