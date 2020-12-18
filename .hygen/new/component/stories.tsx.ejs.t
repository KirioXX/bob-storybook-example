---
to: example/stories/<%= parentPath %>/<%= component_name %>.stories.tsx
---
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withDesign } from 'storybook-addon-designs';

import CenterView from '../CenterView';
import { <%= component_name %> } from '@patchwork/components';

storiesOf('<%= category %>/<%= component_name %>', module)
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
    component: <%= component_name %>,
  })
  .add('Default', () => (
      <<%= component_name %>/>
  ));

