import React from 'react';

import classNames from 'classnames/bind';

import styles from './Header.module.css';
import { MainHeader } from './MainHeader';
import { MainMenu } from './MainMenu';

const cn = classNames.bind(styles);

export interface HeaderProps {
  mainMenuToggleHandler: VoidFunction;
}

export function Header({ mainMenuToggleHandler }: HeaderProps) {
  return (
    <div className={cn('app-header')}>
      <MainHeader mainMenuToggleHandler={mainMenuToggleHandler} />
      <MainMenu />
      {/* TODO-Vladislav add burger menu */}
      {/*
        <div mainMenuOpen={mainMenuOpen} mainMenuToggleHandler={mainMenuToggleHandler}>burger menu will be here</div >
      */}
    </div>
  );
}
