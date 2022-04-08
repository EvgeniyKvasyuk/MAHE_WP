import React from 'react';

import AccordionSummaryMaterial, {
  AccordionSummaryProps as AccordionSummaryPropsMaterial,
} from '@mui/material/AccordionSummary';

export type AccordionSummaryProps = Pick<AccordionSummaryPropsMaterial, 'children' | 'expandIcon' | 'className'>;

export function AccordionSummary({ children, expandIcon, className }: AccordionSummaryProps) {
  return (
    <AccordionSummaryMaterial expandIcon={expandIcon} className={className}>
      {children}
    </AccordionSummaryMaterial>
  );
}
