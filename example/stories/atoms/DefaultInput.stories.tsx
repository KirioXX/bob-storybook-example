import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { DefaultInput } from '@patchwork/components';
import CenterView from '../CenterView';

storiesOf('atoms/DefaultInput', module)
  .addDecorator((getStory: () => any) => <CenterView>{getStory()}</CenterView>)
  .addParameters({
    component: DefaultInput,
  })
  .add('Default', () => <DefaultInput />);
