import { locale } from './locale';

export const QUICK_LINKS = [
  {
    id: 1,
    action: () => console.log('dummy action'),
    title: locale.connect_your_device,
  },
  {
    id: 2,
    to: '/',
    title: locale.forms,
  },
  {
    id: 3,
    to: '/',
    title: locale.health_center_locations,
  },
  {
    id: 4,
    to: '/',
    title: locale.providers,
  },
  {
    id: 5,
    to: '/',
    title: locale.health_center_services,
  },
];
