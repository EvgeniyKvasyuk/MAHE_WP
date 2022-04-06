import * as React from 'react';

import LinkMaterial from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

import { LinkProps } from './link-types';

export function Link({ children, className, target, rel, to, underline = 'none' }: LinkProps) {
  return (
    <LinkMaterial
      component={RouterLink}
      target={target}
      rel={rel}
      className={className}
      to={to}
      underline={underline}
      color="inherit"
    >
      {children}
    </LinkMaterial>
  );
}
