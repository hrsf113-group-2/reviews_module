import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

configure({ adapter: new Adapter() });

// Our tests are below.

test('should have access to DOM', () => {
  expect(typeof document).toBe('object');
});