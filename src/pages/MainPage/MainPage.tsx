import React from 'react';

import { useMediaQuery } from '@mui/material';
import classNames from 'classnames/bind';

import { BREAK_POINTS } from '@common/constants/breackpoints';
import { InnerLayout } from '@components/InnerLayout';
import { MainPageActions } from '@modules/MainPageActions';
import { QuickLinks } from '@modules/QuickLinks';
import { SideBar } from '@modules/SideBar';
import { WhatsNew } from '@modules/WhatsNew';

import styles from './MainPage.module.css';

const cn = classNames.bind(styles);

export function MainPage() {
  const isLaptopMin = useMediaQuery(`(min-width: ${BREAK_POINTS.screenLaptopMin})`);
  const isTabletMax = useMediaQuery(`(max-width: ${BREAK_POINTS.screenTabletMax})`);

  return (
    <InnerLayout className={cn('main-page')} rightSidebar={isLaptopMin ? <SideBar /> : null}>
      <MainPageActions className={cn('main-page__actions')} />
      {isTabletMax && <WhatsNew className={cn('main-page__whats-new')} />}
      {isTabletMax && (
        <div className={cn('main-page__container')}>
          <QuickLinks className={cn('main-page__quick-links', 'main-page__column', 'main-page__column-left')} />
        </div>
      )}
    </InnerLayout>
  );
}
