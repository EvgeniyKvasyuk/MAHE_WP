import * as React from 'react';

import MenuMaterial, { MenuProps as MenuPropsMaterial } from '@mui/material/Menu';
import classNames from 'classnames/bind';

import styles from './Menu.module.css';

export type MenuProps = {
  className?: string;
} & Pick<
  MenuPropsMaterial,
  | 'children'
  | 'anchorEl'
  | 'open'
  | 'onClose'
  | 'id'
  | 'MenuListProps'
  | 'PopoverClasses'
  | 'anchorOrigin'
  | 'transformOrigin'
>;

const cn = classNames.bind(styles);

export function Menu({
  anchorEl,
  children,
  className,
  id,
  MenuListProps,
  onClose,
  open = false,
  PopoverClasses,
  transformOrigin = { horizontal: 'left', vertical: 'top' },
  anchorOrigin = { horizontal: 'left', vertical: 'bottom' },
}: MenuProps) {
  return (
    <MenuMaterial
      anchorEl={anchorEl}
      className={cn('menu', className)}
      id={id}
      MenuListProps={MenuListProps}
      onClose={onClose}
      open={open}
      PopoverClasses={{
        paper: cn('menu__popover'),
        ...PopoverClasses,
      }}
      transformOrigin={transformOrigin}
      anchorOrigin={anchorOrigin}
    >
      {children}
    </MenuMaterial>
  );
}
