import * as React from 'react';

import Icon from '@mui/material/Icon';
import MenuItemMaterial, { MenuItemProps } from '@mui/material/MenuItem';
import classNames from 'classnames/bind';

import styles from './MenuItem.module.css';

export type MenuProps = {
  className?: string;
  noHover?: boolean;
  leftIcon?: string;
} & Pick<MenuItemProps, 'children' | 'autoFocus' | 'selected' | 'onClick'>;

const cn = classNames.bind(styles);

export function MenuItem({ autoFocus, children, className, onClick, selected, noHover, leftIcon }: MenuProps) {
  return (
    <MenuItemMaterial
      autoFocus={autoFocus}
      className={cn('menu-item', className, {
        'menu-item--no-hover': noHover,
      })}
      onClick={onClick}
      selected={selected}
    >
      {leftIcon && <Icon className={cn('menu-item__icon')}>{leftIcon}</Icon>}
      {children}
    </MenuItemMaterial>
  );
}
