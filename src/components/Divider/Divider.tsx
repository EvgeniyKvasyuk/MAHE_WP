import * as React from 'react';

import DividerMaterial, { DividerProps as DividerPropsMaterial } from '@mui/material/Divider';
import classNames from 'classnames/bind';

import styles from './Divider.module.css';

export type DividerProps = Pick<DividerPropsMaterial, 'className' | 'style'>;

const cn = classNames.bind(styles);

export function Divider({ className, style }: DividerProps) {
  return <DividerMaterial style={style} className={cn('divider', className)} />;
}
