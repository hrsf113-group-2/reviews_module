import React from 'react';
import { shallow, mount, render } from 'enzyme';

// Components
import App from './App';
import Review from './Review'

describe('App Test Suite', () => {
  test('Should have a matching snapshot', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
  
  test('Reviews within state should initialize as an empty array', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('reviews')).toEqual([]);
  })

  // test('Should render a div', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find(<div></div>)).to.have.length(1);
  // })

  // test('Test something related to component did mount here?', () => {

  // })

  // test('Test something related to rendering here', () => {
    
  // })


  // test('Test something related to props here', () => {

  // })
});

  
  /* Tests to Add:
    App
    
    1. componentDidMount (don't check for integratino)
    2. does render something
    3. render is of some number of Review components
  */
