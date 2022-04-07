import * as React from 'react';

import MenuMaterial, { MenuProps as MenuPropsMaterial } from '@mui/material/Menu';

export type MenuProps = {
  className?: string;
} & Pick<
  MenuPropsMaterial,
  'children' | 'anchorEl' | 'open' | 'onClose' | 'id' | 'MenuListProps' | 'ref' | 'PopoverClasses'
>;

export function Menu({
  anchorEl,
  children,
  className,
  id,
  MenuListProps,
  onClose,
  open = false,
  PopoverClasses,
}: MenuProps) {
  return (
    <MenuMaterial
      anchorEl={anchorEl}
      className={className}
      id={id}
      MenuListProps={MenuListProps}
      onClose={onClose}
      open={open}
      PopoverClasses={PopoverClasses}
    >
      {children}
    </MenuMaterial>
  );
}
