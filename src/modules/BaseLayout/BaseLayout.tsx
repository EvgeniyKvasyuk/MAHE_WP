import React, { ReactNode } from 'react';

import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';

import { Container } from '@components/Container';
import { Paper } from '@components/Paper';
import { Footer } from '@modules/Footer';
import { Header } from '@modules/Header';

import styles from './BaseLayout.module.css';

const cn = classNames.bind(styles);

export function BaseLayout({ children }: { children?: ReactNode }) {
  return (
    <div className={cn('base-layout')}>
      <Header />

      <main className={cn('base-layout__main-content')}>
        <Container>
          <Paper className={cn('base-layout__paper')}>{children ?? <Outlet />}</Paper>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
