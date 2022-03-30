import { LinkProps as LinkPropsMaterial } from '@mui/material/Link';

export type LinkProps = {
  className?: string;
  to: string;
} & LinkPropsMaterial
