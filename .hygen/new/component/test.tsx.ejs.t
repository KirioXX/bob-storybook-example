---
to: <%= absPath %>/<%= component_name %>.test.tsx
---
import React from 'react';
import { render } from '@testing-library/react-native';
import { <%= component_name %> } from '.';

test('renders component successfully', () => {
  const {getByTestId} = render(<<%= component_name %>  testID="test"/>);
  expect(getByTestId('test')).toBeDefined();
});
