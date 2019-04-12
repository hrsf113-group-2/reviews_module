import React from 'react';

class Pagination extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentPage, reviewsPerPage } = this.props;
    return (
      <div>
        <div>Current Page = {currentPage}</div>
        <div>Reviews per page = {reviewsPerPage}</div>
      </div>
    )
  }
}

export default Pagination;
