import * as React from 'react';

import AppBarMaterial from '@mui/material/AppBar';
import classNames from 'classnames/bind';

import styles from './AppBar.module.css';
import { AppBarProps } from './app-bar-types';

const cn = classNames.bind(styles);

export function AppBar({
  children,
  className,
  position = 'static',
}: AppBarProps) {
  return (
    <AppBarMaterial
      className={cn('app-bar', className)}
      position={position}
    >
      {children}
    </AppBarMaterial>
  );
}
