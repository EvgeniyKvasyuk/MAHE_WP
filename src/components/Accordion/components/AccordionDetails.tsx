import React from 'react';

import AccordionDetailsMaterial, {
  AccordionDetailsProps as AccordionDetailsPropsMaterial,
} from '@mui/material/AccordionDetails';

export type AccordionDetailsProps = Pick<AccordionDetailsPropsMaterial, 'children' | 'className'>;

export function AccordionDetails({ children, className }: AccordionDetailsProps) {
  return <AccordionDetailsMaterial className={className}>{children}</AccordionDetailsMaterial>;
}
