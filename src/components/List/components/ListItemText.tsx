import React from 'react';

import ListItemTextMaterial, { ListItemTextProps as ListItemTextPropsMaterial } from '@mui/material/ListItemText';

export type ListItemTextProps = Pick<ListItemTextPropsMaterial, 'children' | 'style' | 'inset'>;

export function ListItemText({ children, style, inset }: ListItemTextProps) {
  return (
    <ListItemTextMaterial style={style} inset={inset}>
      {children}
    </ListItemTextMaterial>
  );
}
