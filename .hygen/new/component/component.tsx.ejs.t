---
to: <%= absPath %>/<%= component_name %>.tsx
---
import React from 'react';
import { View } from 'react-native'
import useStyles from './<%= component_name %>.styles';

type <%= component_name %>Props = {};

export const <%= component_name %> = ({}: <%= component_name %>Props) => {
  const global = useState(true);
  const s = useStyles([global]);

  return <View style={s`fx:1 &purple`} testID="test" />;
};
