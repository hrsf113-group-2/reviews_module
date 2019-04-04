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

  }

  componentDidMount() {
    const component = this; 
    axios('http://localhost:3000/locations/1/reviews')
    .then(location => {
      component.setState(
        {allReviews: location.data.reviews,
         currentReviews: location.data.reviews,
        })});
  }

  render() {
    return (
      <div>
        <Search />
        <Ratings />
        {this.state.allReviews.map((review, index) => {
          return <Review key={index} review={review}/>
        })}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;