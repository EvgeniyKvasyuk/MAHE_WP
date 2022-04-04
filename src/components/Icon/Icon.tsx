import * as React from 'react';

import IconMaterial, { IconProps as IconPropsMaterial } from '@mui/material/Icon';
import classNames from 'classnames/bind';

import styles from './Icon.module.css';

const cn = classNames.bind(styles);

export type IconProps = {
  className?: string;
} & Pick<IconPropsMaterial, 'children' | 'className' | 'onClick'>;

export function Icon({ children, className, onClick }: IconProps) {
  return (
    <IconMaterial className={cn('icon', className)} {...{ onClick }}>
      {children}
    </IconMaterial>
  );
}
