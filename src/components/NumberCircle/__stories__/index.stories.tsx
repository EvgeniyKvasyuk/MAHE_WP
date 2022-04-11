import React from 'react';

import { Meta, Story } from '@storybook/react';

import { NumberCircle as NumberCircleComponent } from '../NumberCircle';
import { COMPONENT } from './constants';

export default {
  title: COMPONENT.TITLE,
  component: NumberCircleComponent,

  parameters: {
    docs: {
      description: {
        component: COMPONENT.DESCRIPTION,
      },
    },
  },
} as Meta<number>;

export const NumberCircle: Story<number> = function () {
  return <NumberCircleComponent count={15} />;
};
