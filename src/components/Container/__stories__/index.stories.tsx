import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Container as ContainerComponent, ContainerProps } from '../Container';
import { COMPONENT } from './constants';

export default {
  title: COMPONENT.TITLE,
  component: ContainerComponent,
  parameters: {
    docs: {
      description: {
        component: COMPONENT.DESCRIPTION,
      },
    },
  },
} as Meta<ContainerProps>;

export const Container: Story<ContainerProps> = () => {
  return <ContainerComponent style={{ backgroundColor: '#e7e9e9', height: '400px' }}>Content</ContainerComponent>;
};
