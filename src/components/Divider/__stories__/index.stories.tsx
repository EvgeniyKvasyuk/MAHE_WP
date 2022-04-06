import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Divider as DividerComponent, DividerProps } from '../Divider';
import { COMPONENT } from './constants';

export default {
  title: COMPONENT.TITLE,
  component: DividerComponent,
  parameters: {
    docs: {
      description: {
        component: COMPONENT.DESCRIPTION,
      },
    },
  },
} as Meta<DividerProps>;

export const Divider: Story<DividerProps> = () => {
  return <DividerComponent />;
};
