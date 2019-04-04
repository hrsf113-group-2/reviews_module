import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Ratings from './Ratings'

describe('Ratings Test Suite', () => {
  test('Should have a matching snapshot', () => {
    const component = shallow(<Ratings />);
    expect(component).toMatchSnapshot();
  })

})