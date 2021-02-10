---
to: example/stories/<%= parentPath %>/<%= component_name %>.stories.tsx
---
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withDesign } from 'storybook-addon-designs';

import { <%= component_name %> } from '@patchworkhealth/components';

storiesOf('<%= parentPath %>/<%= component_name %>', module)
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

