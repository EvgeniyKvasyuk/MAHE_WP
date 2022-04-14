import { ROUTES } from '@common/routes';
import { TabProps } from '@components/HorizontalMenu';
import { FlippersEnum } from '@modules/flippers';

import { locale } from './locale';

const APPOINTMENTS_SUB_MENU_ITEMS = [
  {
    label: locale.links.appointments.schedule_appointment,
    to: ROUTES.APPOINTMENTS.SCHEDULE_APPOINTMENT,
  },
  {
    label: locale.links.appointments.view_appointments,
    to: ROUTES.APPOINTMENTS.VIEW_APPOINTMENTS,
  },
];

const MY_HEALTH_SUB_MENU_ITEMS = [
  {
    label: locale.links.my_health.my_health_dashboard,
    to: ROUTES.MY_HEALTH.MY_HEALTH_DASHBOARD,
  },
];

export const TAB_LIST = [
  {
    id: 0,
    label: locale.links.home,
    to: ROUTES.MAIN_PAGE,
  },
  {
    id: 1,
    label: locale.links.appointments.root,
    to: ROUTES.APPOINTMENTS.ROOT,
    flipper: FlippersEnum.HideAppointmentButtons,
    subMenuItems: APPOINTMENTS_SUB_MENU_ITEMS,
  },
  {
    id: 2,
    label: locale.links.my_health.root,
    to: ROUTES.MY_HEALTH.ROOT,
    subMenuItems: MY_HEALTH_SUB_MENU_ITEMS,
  },
] as Array<TabProps>;
