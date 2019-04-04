import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Search from './Search';

describe('Search Test Suite', () => {
  test('Should have a matching snapshot', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
  });
})