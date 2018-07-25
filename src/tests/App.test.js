import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/App';

test('Testing App Component', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
