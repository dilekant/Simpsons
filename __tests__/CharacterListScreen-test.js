import React from 'react';
import renderer from 'react-test-renderer';
import CharacterListScreen from '../src/screens/CharacterListScreen';

test('renders correctly', () => {
  const tree = renderer.create(<CharacterListScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});