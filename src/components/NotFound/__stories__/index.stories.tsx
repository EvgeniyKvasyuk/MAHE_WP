import React from 'react';

import { Meta, Story } from '@storybook/react';

import { NotFound as NotFoundComponent } from '@components/NotFound';

import { COMPONENT } from './constants';

export default {
  title: COMPONENT.TITLE,
  component: NotFoundComponent,
  parameters: {
    docs: {
      description: {
        component: COMPONENT.DESCRIPTION,
      },
    },
  },
} as Meta;

export const NotFound: Story = () => {
  return <NotFoundComponent />;
};
