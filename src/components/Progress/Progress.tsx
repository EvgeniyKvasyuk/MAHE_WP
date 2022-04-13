import React, { ReactNode } from 'react';

import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import classNames from 'classnames/bind';
import { isNil } from 'rambda';

import styles from './Progress.module.css';
import { ProgressType } from './constants';

const cn = classNames.bind(styles);

export type ProgressProps = {
  className?: string;
  type?: ProgressType;
  title?: ReactNode;
  maxValue?: number;
  startLabel?: ReactNode;
  endLabel?: ReactNode;
} & Pick<LinearProgressProps, 'value'>;

export function Progress({
  className,
  value = 0,
  type = ProgressType.Main,
  title,
  maxValue,
  startLabel,
  endLabel,
}: ProgressProps) {
  const calculatedValue = maxValue ? Math.round((value / maxValue) * 100) : value;

  return (
    <div
      className={cn('progress', className, {
        [`progress--${type}`]: type,
      })}
    >
      {title && <div className={cn('progress__title')}>{title}</div>}
      <LinearProgress
        value={calculatedValue}
        variant="determinate"
        classes={{
          root: cn('progress__root', {
            [`progress__root--${type}`]: type,
          }),
          bar1Determinate: cn('progress__bar', {
            [`progress__bar--${type}`]: type,
          }),
        }}
      />
      {(!isNil(startLabel) || !isNil(endLabel)) && (
        <div className={cn('progress__labels')}>
          {!isNil(startLabel) && <div className={cn('progress__label', 'progress__label--start')}>{startLabel}</div>}
          {!isNil(endLabel) && <div className={cn('progress__label', 'progress__label--end')}>{endLabel}</div>}
        </div>
      )}
    </div>
  );
}
