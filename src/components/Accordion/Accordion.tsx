import React from 'react';

import AccordionMaterial, { AccordionProps as AccordionPropsMaterial } from '@mui/material/Accordion';

export type AccordionProps = Pick<AccordionPropsMaterial, 'children' | 'onChange' | 'expanded' | 'className'>;

export function Accordion({ children, onChange, expanded, className }: AccordionPropsMaterial) {
  return (
    <AccordionMaterial className={className} onChange={onChange} expanded={expanded}>
      {children}
    </AccordionMaterial>
  );
}
