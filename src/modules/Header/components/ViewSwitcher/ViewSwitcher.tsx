import React from 'react';

import classNames from 'classnames/bind';

import styles from './ViewSwitcher.module.css';
import { locale } from './locale';

const cn = classNames.bind(styles);

export function ViewSwitcher() {
  return (
    <div className={cn('change-view')}>
      <div className={cn('change-view__item')}>{locale.primary_employer}</div>
      <div className={cn('change-view__item')}>{locale.other_employer}</div>
    </div>
  );
}
