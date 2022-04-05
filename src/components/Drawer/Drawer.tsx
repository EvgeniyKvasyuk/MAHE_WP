import * as React from 'react';

import DrawerMaterial, { DrawerProps as DrawerPropsMaterial } from '@mui/material/Drawer';

export type DrawerProps = {
  className?: string;
} & Pick<DrawerPropsMaterial, 'children' | 'className' | 'variant' | 'open' | 'onClose' | 'anchor'>;

export function Drawer({ anchor = 'left', children, className, onClose, open = false, variant }: DrawerProps) {
  return (
    <DrawerMaterial
      anchor={anchor}
      className={className}
      onClose={onClose}
      open={open}
      variant={variant}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      {children}
    </DrawerMaterial>
  );
}