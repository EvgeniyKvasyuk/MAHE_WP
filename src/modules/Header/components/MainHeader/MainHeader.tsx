import React from 'react';

import classNames from 'classnames/bind';

import { AppBar } from '@components/AppBar';
import { Link } from '@components/Link';

import styles from './MainHeader.module.css';
import { locale } from './locale';
import logo from './logo.svg';

const cn = classNames.bind(styles);

export function MainHeader() {
  return (
    <AppBar className={cn('main-header')}>
      <Link to="/">
        <img
          src={logo}
          className={cn('main-header__logo')}
          alt={locale.logo_alt}
        />
      </Link>

      <div className={cn('main-header__content')}>
        <div className={cn('main-header__content-item')}>
          <Link to="/messages" underline="hover">
            {locale.messages_link}
          </Link>
        </div>
        <div className={cn('main-header__content-item')}>
          317-559-2185
        </div>
        <div className={cn('main-header__content-item')}>
          Firstname Lastname
        </div>
      </div>
    </AppBar>
  );
}
