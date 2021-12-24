import React from 'react';
import renderer from 'react-test-renderer';
import AddCharacterScreen from '../src/screens/AddCharacterScreen';

test('renders correctly', () => {
  const tree = renderer.create(<AddCharacterScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});