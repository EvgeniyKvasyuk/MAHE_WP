import React from 'react';

import classNames from 'classnames/bind';

import styles from './NumberCircle.module.css';
import { SizesEnum } from './constsnts';

type NumberCircleProps = {
  count: number;
  size?: SizesEnum;
};

const cn = classNames.bind(styles);

export function NumberCircle({ count, size = SizesEnum.Medium }: NumberCircleProps) {
  return (
    <div
      className={cn('number-circle', {
        [`number-circle--${size}`]: size,
      })}
    >
      {count}
    </div>
  );
}
