import React from 'react';

import classNames from 'classnames/bind';

import { ROUTES } from '@common/routes';
import { AppBar } from '@components/AppBar';
import { Link, LinkProps } from '@components/Link';

import styles from './MainMenu.module.css';
import { locale } from './locale';

const cn = classNames.bind(styles);

function MainMenuLink({ to, children }: LinkProps) {
  return (
    <Link to={to} underline="hover" className={cn('main-menu__item')}>
      {children}
    </Link>
  );
}

export function MainMenu() {
  return (
    <AppBar className={cn('main-menu')}>
      <MainMenuLink to={ROUTES.MAIN_PAGE}>{locale.links.home}</MainMenuLink>
      <MainMenuLink to={ROUTES.APPOINTMENTS}>{locale.links.appointments}</MainMenuLink>
      <MainMenuLink to={ROUTES.PRESCRIPTIONS}>{locale.links.prescriptions}</MainMenuLink>
    </AppBar>
  );
}
