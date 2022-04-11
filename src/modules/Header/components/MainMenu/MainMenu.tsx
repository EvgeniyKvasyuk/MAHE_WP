import React from 'react';

import classNames from 'classnames/bind';

import { HorizontalMenu } from '@components/HorizontalMenu';

import { TAB_LIST } from '../../constants';
import styles from './MainMenu.module.css';

const cn = classNames.bind(styles);

export function MainMenu() {
  return <HorizontalMenu className={cn('main-menu')} menuItemList={TAB_LIST} />;
}
