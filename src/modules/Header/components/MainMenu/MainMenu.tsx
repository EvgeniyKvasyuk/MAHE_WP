import React from 'react';

import { useMediaQuery } from '@mui/material';
import classNames from 'classnames/bind';

import { BREAK_POINTS } from '@common/constants/breackpoints';
import { HorizontalMenu } from '@components/HorizontalMenu';

import { TAB_LIST } from '../../constants';
import styles from './MainMenu.module.css';

const cn = classNames.bind(styles);

export function MainMenu() {
  const isTabletMax = useMediaQuery(`(max-width: ${BREAK_POINTS.screenTabletMax})`);

  if (isTabletMax) {
    return null;
  }

  return <HorizontalMenu className={cn('main-menu')} menuItemList={TAB_LIST} />;
}
