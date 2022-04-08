import React from 'react';

import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import { mainMenuOpenSelector } from '../store';
import { BurgerMenu } from './BurgerMenu';
import styles from './Header.module.css';
import { MainHeader } from './MainHeader';
import { MainMenu } from './MainMenu';

const cn = classNames.bind(styles);

export interface HeaderProps {
  mainMenuToggleHandler: VoidFunction;
}

export function Header({ mainMenuToggleHandler }: HeaderProps) {
  const mainMenuOpen = useSelector(mainMenuOpenSelector);

  return (
    <div className={cn('app-header')}>
      <MainHeader mainMenuToggleHandler={mainMenuToggleHandler} />
      <MainMenu />

      <BurgerMenu mainMenuOpen={mainMenuOpen} mainMenuToggleHandler={mainMenuToggleHandler} />
    </div>
  );
}
