import * as React from 'react';

import LinkMaterial from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

import { LinkProps } from './link-types';

export function Link({
  children,
  className,
  to,
  color = 'inherit',
  underline = 'none',
}: LinkProps) {
  return (
    <LinkMaterial
      component={RouterLink}
      className={className}
      to={to}
      color={color}
      underline={underline}
    >
      {children}
    </LinkMaterial>
  );
}
