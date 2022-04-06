import React from 'react';

import TypographyMaterial, { TypographyProps as TypographyPropsMaterial } from '@mui/material/Typography';
import classNames from 'classnames/bind';

import styles from './Typography.module.css';

const cn = classNames.bind(styles);

export type TypographyProps = {
  className?: string;
} & Pick<TypographyPropsMaterial, 'children' | 'variant' | 'align'>;

export function Typography({ children, className, variant, align }: TypographyProps) {
  return (
    <TypographyMaterial className={cn(className)} {...{ variant, align }}>
      {children}
    </TypographyMaterial>
  );
}
