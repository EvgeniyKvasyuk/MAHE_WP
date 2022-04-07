import React from 'react';

import { Meta, Story } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { HorizontalMenu as HorizontalMenuComponent, HorizontalMenuProps } from '../HorizontalMenu';
import { COMPONENT } from './constants';

export default {
  title: COMPONENT.TITLE,
  component: HorizontalMenuComponent,
  parameters: {
    docs: {
      description: {
        component: COMPONENT.DESCRIPTION,
      },
    },
  },
} as Meta<HorizontalMenuProps>;

const APPOINTMENTS_SUB_MENU_ITEMS = [
  {
    label: 'Schedule Appointment',
    to: '/appointments/schedule',
  },
  {
    label: 'View Appointments',
    to: '/appointments/view',
  },
];

const MENU_ITEMS = [
  {
    id: 0,
    label: 'Home',
    to: '/',
  },
  {
    id: 1,
    label: 'Appointments',
    to: '/appointments',
    subMenuItems: APPOINTMENTS_SUB_MENU_ITEMS,
  },
];

export const HorizontalMenu: Story<HorizontalMenuProps> = () => {
  return (
    <Router>
      <HorizontalMenuComponent menuItemList={MENU_ITEMS} />
    </Router>
  );
};
