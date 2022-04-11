import React from 'react';

import { Meta, Story } from '@storybook/react';

import { AppBar as AppBarComponent } from '../AppBar';
import { AppBarProps } from '../app-bar-types';
import { COMPONENT } from './constants';

function AppBarContent() {
  return <div>Menu</div>;
}

export default {
  title: COMPONENT.TITLE,
  component: AppBarComponent,
  parameters: {
    docs: {
      description: {
        component: COMPONENT.DESCRIPTION,
      },
    },
  },
  args: {
    children: <AppBarContent />,
  },
} as Meta<AppBarProps>;

export const AppBar: Story<AppBarProps> = (args) => <AppBarComponent {...args} />;
