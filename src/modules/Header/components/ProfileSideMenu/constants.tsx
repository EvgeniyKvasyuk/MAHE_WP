import React from 'react';

import { ROUTES } from '@common/routes';
import { IconType } from '@components/SvgIcon';

import { ViewSwitcher } from '../ViewSwitcher';
import { locale } from './locale';

export const MENU_ITEMS = [
  {
    icon: 'accountCircle' as IconType,
    to: ROUTES.PROFILE,
    label: locale.links.profile,
  },
  {
    component: <ViewSwitcher />,
    noHover: true,
  },
  {
    icon: 'message' as IconType,
    to: ROUTES.MESSAGES,
    label: locale.links.messages,
  },
  {
    icon: 'phone' as IconType,
    to: '',
    label: locale.links.phone,
  },
  {
    icon: 'union' as IconType,
    to: '',
    label: locale.links.covid,
  },
  {
    icon: 'signOut' as IconType,
    to: '',
    label: locale.links.sign_out,
  },
];
