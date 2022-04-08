import React from 'react';

import classNames from 'classnames/bind';

import { ROUTES } from '@common/routes';
import { AppBar } from '@components/AppBar';
import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import { Link } from '@components/Link';
import { SvgIcon } from '@components/SvgIcon';

import { ProfileButton } from '../ProfileButton';
import { ProfileMenuDropdown } from '../ProfileMenuDropdown';
import styles from './MainHeader.module.css';
import { locale } from './locale';

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
          <SvgIcon icon="mainLogo" className={cn('main-header__logo')} viewBox="0 0 220 70" />
        </Link>
      </div>

      <div className={cn('main-header__profile-button')}>
        <ProfileButton userFirstName={locale.user_first_name} userLastName={locale.user_last_name} />
      </div>

      <div className={cn('main-header__right-content')}>
        <div className={cn('main-header__content-item')}>
          <Link to={ROUTES.MESSAGES}>
            <Button startIcon="message">{locale.messages_link}</Button>
          </Link>
        </div>
        <div className={cn('main-header__content-item')}>
          <Button startIcon="phone">{locale.phone_number}</Button>
        </div>
        <div className={cn('main-header__content-item')}>
          <ProfileMenuDropdown triggerButtonText={`${locale.user_first_name} ${locale.user_last_name}`} />
        </div>
      </div>
    </AppBar>
  );
}
