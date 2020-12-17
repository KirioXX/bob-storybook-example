import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import { DefaultButton } from '.';

test('renders component successfully', () => {
  const { getByTestId } = render(
    <DefaultButton onPress={() => null} testID="test">
      <Text>Click Me!</Text>
    </DefaultButton>
  );
  expect(getByTestId('test')).toBeDefined();
});
