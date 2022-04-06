import { ReactChild } from 'react';

import { LinkProps as LinkPropsMaterial } from '@mui/material/Link';

export type LinkProps = {
  className?: string;
  target?: string;
  rel?: string;
  to: string;
  children: ReactChild;
} & Pick<LinkPropsMaterial, 'underline'>;
