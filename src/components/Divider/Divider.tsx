import * as React from 'react';

import DividerMaterial, { DividerProps as DividerPropsMaterial } from '@mui/material/Divider';

export type DividerProps = Pick<DividerPropsMaterial, 'className' | 'style'>;

export function Divider({ className, style }: DividerProps) {
  return <DividerMaterial style={style} className={className} />;
}
