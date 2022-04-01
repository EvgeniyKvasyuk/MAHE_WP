import React from 'react';

import classNames from 'classnames/bind';

import styles from './Header.module.css';
import { MainHeader, MainMenu } from './components';
import { HeaderState } from './store';

const cn = classNames.bind(styles);

export interface HeaderProps {
  mainMenuToggleHandler: VoidFunction;
  mainMenuOpen: HeaderState['mainMenuOpen'];
}

export function Header({ mainMenuToggleHandler, mainMenuOpen }: HeaderProps) {
  return (
    <div className={cn('app-header')}>
      <MainHeader mainMenuToggleHandler={mainMenuToggleHandler} />
      <MainMenu mainMenuOpen={mainMenuOpen} mainMenuToggleHandler={mainMenuToggleHandler} />
    </div>
  );
}
