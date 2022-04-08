import React from 'react';

import ListItemMaterial, { ListItemProps as ListItemPropsMaterial } from '@mui/material/ListItem';

export type ListItemProps = Pick<ListItemPropsMaterial, 'children' | 'alignItems' | 'style' | 'className'>;

export function ListItem({ children, alignItems, style, className }: ListItemProps) {
  return (
    <ListItemMaterial alignItems={alignItems} style={style} className={className}>
      {children}
    </ListItemMaterial>
  );
}
