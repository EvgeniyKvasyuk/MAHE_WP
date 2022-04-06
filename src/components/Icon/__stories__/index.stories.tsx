import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Icon as IconComponent, IconProps } from '../Icon';
import { COMPONENT } from './constants';

export default {
  title: COMPONENT.TITLE,
  component: IconComponent,
  parameters: {
    docs: {
      description: {
        component: COMPONENT.DESCRIPTION,
      },
    },
  },
} as Meta<IconProps>;

const icons = ['delete_forever', 'add_a_photo', 'menu', '3d_rotation'] as const;

export const Icon: Story<IconProps> = (args) => (
  <>
    {icons.map((item) => (
      <span style={{ marginRight: '1rem' }} key={item}>
        <IconComponent key={item} {...args}>
          {item}
        </IconComponent>
      </span>
    ))}
  </>
);
