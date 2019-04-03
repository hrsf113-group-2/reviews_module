import React from 'react';
class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>{this.props.review.name}</div>
      </div>
    )
  }
}


export default Review;