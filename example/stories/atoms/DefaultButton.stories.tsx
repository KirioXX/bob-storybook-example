import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { withDesign } from 'storybook-addon-designs';
import { Text } from 'react-native';

import CenterView from '../CenterView';
import { DefaultButton } from '@patchwork/components';

storiesOf('atoms/DefaultButton', module)
  .addDecorator((getStory: () => any) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withDesign)
  .addParameters({
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
    },
  })
  .addParameters({
    component: DefaultButton,
  })
  .add('with text', () => (
    <DefaultButton onPress={action('clicked-text')}>
      <Text style={{ color: 'white' }}>{text('Button text', 'Button')}</Text>
    </DefaultButton>
  ))
  .add('with some emoji', () => (
    <DefaultButton onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </DefaultButton>
  ));
