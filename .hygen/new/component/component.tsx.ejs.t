---
to: <%= absPath %>/<%= component_name %>.tsx
---
import styled from 'styled-components/native';

type <%= component_name %>Props = {};

export const <%= component_name %> = styled.View<<%= component_name %>Props>`
  background-color: '#BADA55';
`;
