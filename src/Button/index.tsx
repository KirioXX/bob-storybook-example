import React from 'react';
import { TouchableHighlight } from 'react-native';

type ButtonProps = {
  onPress: () => void;
  children: any;
};

export default function Button({ onPress, children }: ButtonProps) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}
