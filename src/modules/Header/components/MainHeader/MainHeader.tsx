import React from 'react';

import classNames from 'classnames/bind';

import { ROUTES } from '@common/routes';
import { AppBar } from '@components/AppBar';
import { Icon } from '@components/Icon';
import { Link } from '@components/Link';

import styles from './MainHeader.module.css';
import { locale } from './locale';
import logo from './logo.svg';

const cn = classNames.bind(styles);

export interface MainHeaderProps {
  mainMenuToggleHandler: VoidFunction;
}

export function MainHeader({ mainMenuToggleHandler }: MainHeaderProps) {
  return (
    <AppBar className={cn('main-header')}>
      <div className={cn('main-header__left-content')}>
        <Icon className={cn('main-header__menu-button')} onClick={mainMenuToggleHandler}>
          menu
        </Icon>
        <Link to="/">
          <img src={logo} className={cn('main-header__logo')} alt={locale.logo_alt} />
        </Link>
      </div>

      <div className={cn('main-header__right-content')}>
        <div className={cn('main-header__content-item')}>
          <Link to={ROUTES.MESSAGES} underline="hover">
            {locale.messages_link}
          </Link>
        </div>
        <div className={cn('main-header__content-item')}>{locale.phone_number}</div>
        <div className={cn('main-header__content-item')}>{locale.user_name}</div>
      </div>
    </AppBar>
  );
}
