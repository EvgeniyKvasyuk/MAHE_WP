import * as React from 'react';

import ContainerMaterial, { ContainerProps as ContainerPropsMaterial } from '@mui/material/Container';

export type ContainerProps = Pick<ContainerPropsMaterial, 'children' | 'style'>;

export function Container({ children, style }: ContainerProps) {
  return <ContainerMaterial style={style}>{children}</ContainerMaterial>;
}
