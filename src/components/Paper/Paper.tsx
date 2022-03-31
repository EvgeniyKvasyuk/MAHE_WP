import * as React from 'react';

import PaperMaterial, { PaperProps } from '@mui/material/Paper';

export function Paper({
  children,
  className,
  elevation = 0,
  square = true,
}: Pick<PaperProps, 'children' | 'className' | 'elevation' | 'square'>) {
  return (
    <PaperMaterial className={className} elevation={elevation} square={square}>
      {children}
    </PaperMaterial>
  );
}
