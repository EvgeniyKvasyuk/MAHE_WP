import React from 'react';

import { ROUTES } from '@common/routes';
import { render } from '@tests/test-utils';

import { HorizontalMenu } from '../HorizontalMenu';

const APPOINTMENTS_SUB_MENU_ITEMS = [
  {
    label: 'Schedule Appointment',
    to: ROUTES.APPOINTMENTS.SCHEDULE_APPOINTMENT,
  },
  {
    label: 'View Appointments',
    to: ROUTES.APPOINTMENTS.VIEW_APPOINTMENTS,
  },
];

export const TAB_LIST = [
  {
    id: 0,
    label: 'Home',
    to: ROUTES.MAIN_PAGE,
  },
  {
    id: 1,
    label: 'Appointments',
    to: ROUTES.APPOINTMENTS.ROOT,
    subMenuItems: APPOINTMENTS_SUB_MENU_ITEMS,
  },
  {
    id: 2,
    label: 'My Health',
    to: ROUTES.MY_HEALTH.ROOT,
  },
];

test('<HorizontalMenu> snapshot', () => {
  const component = render(<HorizontalMenu menuItemList={TAB_LIST} />);

  expect(component).toMatchSnapshot();
});
