import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Review from './review';
import Search from './Search';
import Ratings from './Ratings';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allReviews: [],
      currentReviews: [],
    }
    this.searchSubmit = this.searchSubmit.bind(this);
  }

  componentDidMount() {
    const component = this; 
    axios('http://localhost:3000/locations/1/reviews')
    .then(location => {
      component.setState(
        {allReviews: location.data.reviews,
         currentReviews: location.data.reviews,
        }
      )
    });
  }

  searchSubmit(text) { // NOTE: What's passed in may be an event instead?
    // Create an empty selectedArray
    // Check each review for text within it. (text is a string so we can use string method)
    // If it is
      // push it into selectedArray
    // Now we have exited the loop
    // set the currentReviews state to be the selectedArray.  
  }

  render() {
    return (
      <div>
        <Search />
        <Ratings />
        {this.state.currentReviews.map((review, index) => {
          return <Review key={index} review={review}/>
        })}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;