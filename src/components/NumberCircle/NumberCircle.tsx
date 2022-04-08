import React from 'react';

import classNames from 'classnames/bind';

import styles from './NumberCircle.module.css';

type NumberCircleProps = {
  count: number;
};

const cn = classNames.bind(styles);

export function NumberCircle({ count }: NumberCircleProps) {
  return <div className={cn('number-circle')}>{count}</div>;
}
