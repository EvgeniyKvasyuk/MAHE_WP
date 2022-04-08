import React from 'react';

import { Meta, Story } from '@storybook/react';

import { SvgIcon as SvgIconComponent, SvgIconProps } from '../SvgIcon';
import { COMPONENT } from './constants';

export default {
  title: COMPONENT.TITLE,
  component: SvgIconComponent,
  parameters: {
    docs: {
      description: {
        component: COMPONENT.DESCRIPTION,
      },
    },
  },
} as Meta<SvgIconProps>;

export const SvgIcon: Story<SvgIconProps> = function () {
  return <SvgIconComponent icon="message" />;
};
