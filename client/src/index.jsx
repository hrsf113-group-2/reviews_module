import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Review from './review';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
    }
  }

  componentDidMount() {
    const component = this; // this line is called before the fetch API call is made
    fetch('http://localhost:3000/locations/1/reviews')
      .then(function(response) {
      return response.json();
    })
    .then(function(jsonStr) {
      component.setState({ reviews: jsonStr.reviews });
    });
    // The above will change the reviews state to be the reviews
    // of locationID 1.
    // How do I make it so...
      // 1. This fetch is called each time at locations/:locationID/reviews
      // 2. That :/locationID is used in our fetch call.
  }

  render() {
    return (
      <div>
        {this.state.reviews.map((review, index) => {
          return <Review key={index} review={review}/>
        })}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;