import React from 'react';

import classNames from 'classnames/bind';

import styles from './Header.module.css';
import { MainHeader, MainMenu } from './components';

const cn = classNames.bind(styles);

export function Header() {
  return (
    <div className={cn('app-header')}>
      <MainHeader />
      <MainMenu />
    </div>
  );
}
