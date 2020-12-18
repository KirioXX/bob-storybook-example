import React from 'react';
import { render } from '@testing-library/react-native';
import { DefaultInput } from '.';

test('renders component successfully', () => {
  const { getByTestId } = render(<DefaultInput testID="test" />);
  expect(getByTestId('test')).toBeDefined();
});
