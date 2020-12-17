---
to: example/stories/<%= parentPath %>/<%= component_name %>.stories.tsx
---
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withDesign } from 'storybook-addon-designs';

import <%= component_name %> from '.';

storiesOf('<%= category %>/<%= component_name %>', module)
  .addDecorator(withDesign)
  .add(
    'Default',
    (args) => (
      <<%= component_name %> {...args}/>
    ),
    {
      design: {
        type: 'figma',
        url: 'FILL ME',
      },
    }
  );

