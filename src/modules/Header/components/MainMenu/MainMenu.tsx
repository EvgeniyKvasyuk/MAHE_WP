import React from 'react';

import classNames from 'classnames/bind';

import { HorizontalMenu } from '@components/HorizontalMenu';

import styles from './MainMenu.module.css';
import { TAB_LIST } from './constants';

const cn = classNames.bind(styles);

export function MainMenu() {
  return <HorizontalMenu className={cn('main-menu')} menuItemList={TAB_LIST} />;
}
