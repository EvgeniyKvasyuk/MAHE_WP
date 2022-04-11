import React, { ReactNode } from 'react';

import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';

import { Footer } from '@modules/Footer';
import { Header } from '@modules/Header';

import styles from './BaseLayout.module.css';

const cn = classNames.bind(styles);

export function BaseLayout({ children }: { children?: ReactNode }) {
  return (
    <div className={cn('base-layout')}>
      <div className={cn('base-layout__header')}>
        <Header />
      </div>
      <main className={cn('base-layout__main-content')}>{children ?? <Outlet />}</main>
      <div className={cn('base-layout__footer')}>
        <Footer />
      </div>
    </div>
  );
}
