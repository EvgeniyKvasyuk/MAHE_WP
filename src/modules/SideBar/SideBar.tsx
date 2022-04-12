import React from 'react';

import classNames from 'classnames/bind';

import { QuickLinks } from '../QuickLinks';
import { WhatsNew } from '../WhatsNew';
import styles from './SideBar.module.css';

const cn = classNames.bind(styles);

export function SideBar() {
  return (
    <div className={cn('side-bar')}>
      <WhatsNew className={cn('side-bar__container')} />
      <QuickLinks className={cn('side-bar__container')} />
    </div>
  );
}
