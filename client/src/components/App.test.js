import React from 'react';
import { shallow, mount, render } from 'enzyme';

// Components
import App from './App';

/* What tests can I write to help build out App?
  1. State starts out empty.
  2. State changes when component mounts - changes to a list of all reviews.
  3. The App does indeed render.
  4. 

*/

describe('App Test Suite', () => {
  test('Should have a matching snapshot', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
  
  test('Reviews within state should initialize as an empty array', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('allReviews')).toEqual([]);
  });

  test('Should render a div', () => {
    
  });

  test('Test something related to component did mount here?', () => {

  });

  test('Test something related to rendering here', () => {
    
  });


  test('Test something related to props here', () => {

  });
});
