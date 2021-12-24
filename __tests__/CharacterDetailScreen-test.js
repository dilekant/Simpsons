import React from 'react';
import renderer from 'react-test-renderer';
import CharacterDetailScreen from '../src/screens/CharacterDetailScreen';

test('renders correctly', () => {
  const tree = renderer.create(<CharacterDetailScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});