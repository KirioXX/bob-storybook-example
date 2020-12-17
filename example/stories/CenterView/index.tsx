import React from 'react';
import { View } from 'react-native';
import style from './styles';

type CenterViewProps = {
  children?: any;
};

export default function CenterView({ children }: CenterViewProps) {
  return <View style={style.main}>{children}</View>;
}
