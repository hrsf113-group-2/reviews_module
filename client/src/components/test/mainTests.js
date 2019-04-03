import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('should have access to DOM', () => {
  expect(typeof document).toBe('object');
});

// Write a test that will check that you render a div.
// test('should render a div tag', () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.text()).toBe('Hello from Index.jsx');

// })