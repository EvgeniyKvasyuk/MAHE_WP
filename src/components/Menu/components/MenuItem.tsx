import * as React from 'react';

import MenuItemMaterial, { MenuItemProps } from '@mui/material/MenuItem';

export type MenuProps = {
  className?: string;
} & Pick<MenuItemProps, 'children' | 'autoFocus' | 'onClick'>;

export function MenuItem({ autoFocus, children, className, onClick }: MenuProps) {
  return (
    <MenuItemMaterial autoFocus={autoFocus} className={className} onClick={onClick}>
      {children}
    </MenuItemMaterial>
  );
}
