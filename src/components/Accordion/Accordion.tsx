import React from 'react';

import AccordionMaterial, { AccordionProps as AccordionPropsMaterial } from '@mui/material/Accordion';

export type AccordionProps = Pick<
  AccordionPropsMaterial,
  'children' | 'onChange' | 'expanded' | 'square' | 'className' | 'disableGutters'
>;

export function Accordion({
  children,
  onChange,
  expanded,
  className,
  square = false,
  disableGutters = false,
}: AccordionProps) {
  return (
    <AccordionMaterial
      className={className}
      onChange={onChange}
      expanded={expanded}
      square={square}
      disableGutters={disableGutters}
    >
      {children}
    </AccordionMaterial>
  );
}
