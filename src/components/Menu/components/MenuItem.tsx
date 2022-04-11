import * as React from 'react';

import MenuItemMaterial, { MenuItemProps } from '@mui/material/MenuItem';
import classNames from 'classnames/bind';

import { SvgIcon, IconType } from '@components/SvgIcon';

import styles from './MenuItem.module.css';

export type MenuProps = {
  className?: string;
  noHover?: boolean;
  leftIcon?: IconType;
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
      {leftIcon && <SvgIcon className={cn('menu-item__icon')} icon={leftIcon} viewBox="0 0 25 25" />}
      {children}
    </MenuItemMaterial>
  );
}
