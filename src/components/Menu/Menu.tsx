import * as React from 'react';

import MenuMaterial, { MenuProps as MenuPropsMaterial } from '@mui/material/Menu';

export type MenuProps = {
  className?: string;
} & Pick<MenuPropsMaterial, 'children' | 'anchorEl' | 'open' | 'onClose' | 'id'>;

export function Menu({ anchorEl, children, className, id, onClose, open = false }: MenuProps) {
  return (
    <MenuMaterial anchorEl={anchorEl} className={className} id={id} onClose={onClose} open={open}>
      {children}
    </MenuMaterial>
  );
}
