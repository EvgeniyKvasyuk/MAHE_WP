import { ReactNode } from 'react';

import { AppBarProps as MaterialAppBarProps } from '@mui/material/AppBar';

export type AppBarProps = {
  children: ReactNode;
  className?: string;
} & Pick<MaterialAppBarProps, 'position'>;
