import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Review from './Review';

/* What tests can I write to help build out my review module
  1.



*/

describe('Review Test Suite', () => {
  test('Should have a matching snapshot', () => {
    const component = shallow(<Review />);
    expect(component).toMatchSnapshot();
  })

  const mockReview = {
    ID: 10,
    _id: "5ca4db0cec9d9432380b7727",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/iqonicd/128.jpg",
    date: "2019-04-02T18:59:54.195Z",
    name: "Lebron James",
    "rating-accuracy": 4,
    "rating-check-in": 5,
    "rating-cleanliness": 3,
    "rating-communication": 3,
    "rating-location": 5,
    "rating-value": 2,
    "text": "This place is amazing, I'm really glad I booked, hooray!",
  }

  test('Should have props review', () => {
    // This test is passing in a fake review - defined above - and then checks if props is of correct form.
    // component.props() returns an object w/ a children key. This value is EVERYTHING between the div in render's return.
    // The values from mockReview are passed into where JSX is provided in review.jsx
    // {"children": [<img src="https://s3.amazonaws.com/uifaces/faces/twitter/iqonicd/128.jpg" />, <div>Lebron James</div>, <div>Month Year</div>, <p>This place is amazing, I'm really glad I booked, hooray!</p>]}
    const component = shallow(<Review review={mockReview}/>);
    expect(component.props()).toBe(mockReview);
  })

  test('')

})