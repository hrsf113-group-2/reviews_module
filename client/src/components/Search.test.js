import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Search from './Search';

/* What do I want to test in Search that will prove it works?
  1. Changes the state on submission.
  2. Re-renders the page on state change.
  3. Can render the original state (original being allReviews) on reset button click.
  4. Will bold words in paragraphs? (this one may be tricky)
*/

describe('Search Test Suite', () => {
  test('Should have a matching snapshot', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
  });
})