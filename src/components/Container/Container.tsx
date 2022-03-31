import * as React from 'react';

import ContainerMaterial, { ContainerProps } from '@mui/material/Container';

export function Container({ children }: Pick<ContainerProps, 'children'>) {
  return <ContainerMaterial>{children}</ContainerMaterial>;
}
