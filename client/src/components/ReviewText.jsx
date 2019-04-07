import React from 'react';

class ReviewText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>
        {this.props.reviewText}
      </p>
    )
  }
}

export default ReviewText;
