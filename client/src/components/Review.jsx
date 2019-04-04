import React from 'react';
class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={this.props.review.avatar}></img>
        <div>{this.props.review.name}</div>
        <div>Month Year</div>
        <p>{this.props.review.text}</p>
      </div>
    )
  }
}


export default Review;