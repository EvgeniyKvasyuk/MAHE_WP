import React from 'react';

import classNames from 'classnames/bind';

import { ROUTES } from '@common/routes';
import { AppBar } from '@components/AppBar';
import { Drawer } from '@components/Drawer';
import { Link, LinkProps } from '@components/Link';

import { HeaderState } from '../../store';
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

export interface MainMenuProps {
  mainMenuToggleHandler: VoidFunction;
  mainMenuOpen: HeaderState['mainMenuOpen'];
}

export function MainMenu({ mainMenuToggleHandler, mainMenuOpen }: MainMenuProps) {
  const renderMenuItems = () => {
    return (
      <>
        <MainMenuLink to={ROUTES.MAIN_PAGE}>{locale.links.home}</MainMenuLink>
        <MainMenuLink to={ROUTES.APPOINTMENTS}>{locale.links.appointments}</MainMenuLink>
      </>
    );
  };

  return (
    <AppBar className={cn('main-menu')}>
      {renderMenuItems()}

      <Drawer open={mainMenuOpen} onClose={mainMenuToggleHandler}>
        <div className={cn('main-menu__content')}>{renderMenuItems()}</div>
      </Drawer>
    </AppBar>
  );
}
