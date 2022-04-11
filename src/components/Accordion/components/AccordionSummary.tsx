import React from 'react';

import AccordionSummaryMaterial, {
  AccordionSummaryProps as AccordionSummaryPropsMaterial,
} from '@mui/material/AccordionSummary';

export type AccordionSummaryProps = {
  expandedClassName?: string;
  contentClassName?: string;
} & Pick<AccordionSummaryPropsMaterial, 'children' | 'expandIcon' | 'className'>;

export function AccordionSummary({
  children,
  expandIcon,
  className,
  expandedClassName,
  contentClassName,
}: AccordionSummaryProps) {
  return (
    <AccordionSummaryMaterial
      expandIcon={expandIcon}
      className={className}
      classes={{ expanded: expandedClassName, content: contentClassName }}
    >
      {children}
    </AccordionSummaryMaterial>
  );
}
