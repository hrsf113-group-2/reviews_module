import React from 'react';

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
