import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { withDesign } from 'storybook-addon-designs';

import Button from '.';
import CenterView from '../CenterView';

storiesOf('Button', module)
  .addDecorator((getStory: () => any) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .addDecorator(withDesign)
  .addParameters({
    component: Button,
  })
  .addParameters({
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
    },
  })
  .add('with text', () => (
    <Button
      onPress={action('clicked-text')}
      title={text('Button text', 'Hello Button')}
    />
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')} title="😀 😎 👍 💯" />
  ));
