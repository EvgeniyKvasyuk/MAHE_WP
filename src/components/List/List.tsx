import React from 'react';

import ListMaterial, { ListProps as ListPropsMaterial } from '@mui/material/List';

export type ListProps = Pick<ListPropsMaterial, 'children' | 'style' | 'className'>;

export function List({ children, style, className }: ListProps) {
  return (
    <ListMaterial style={style} className={className}>
      {children}
    </ListMaterial>
  );
}
