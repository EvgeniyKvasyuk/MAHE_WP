import React, { ReactElement, useMemo } from 'react';

import { useMediaQuery } from '@mui/material';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import { BREAK_POINTS } from '@common/constants/breackpoints';
import { ROUTES } from '@common/routes';
import { ActionButton, ActionButtonProps } from '@components/ActionButton';
import { Paper } from '@components/Paper';

import styles from './MainPageActions.module.css';
import { locale } from './locale';

const cn = classNames.bind(styles);

type Props = {
  className?: string;
};

export const MainPageActions = ({ className }: Props) => {
  const navigate = useNavigate();
  const screenMobileMaxMatches = useMediaQuery(`(max-width: ${BREAK_POINTS.screenMobileMax})`);

  const ACTIONS: ActionButtonProps[] = useMemo(
    () => [
      {
        title: locale.buttons.schedule,
        icon: 'schedule',
        onClick: () => {
          navigate(ROUTES.SCHEDULE);
        },
      },
      {
        title: locale.buttons.refill,
        icon: 'refill',
        onClick: () => {
          navigate(ROUTES.REFILL);
        },
      },
      {
        title: locale.buttons.message,
        icon: 'message',
        onClick: () => {
          navigate(ROUTES.MESSAGES);
        },
      },
      {
        title: locale.buttons.records,
        icon: 'records',
        onClick: () => {
          navigate(ROUTES.RECORDS);
        },
      },
    ],
    [navigate],
  );

  const leftColumn: ReactElement[] = [];
  const rightColumn: ReactElement[] = [];

  ACTIONS.forEach((action, i) => {
    if (i % 2 === 0) {
      leftColumn.push(<ActionButton key={i} className={cn('main-page-actions__button')} {...action} />);
    } else {
      rightColumn.push(<ActionButton key={i} className={cn('main-page-actions__button')} {...action} />);
    }
  });

  return (
    <Paper className={cn('main-page-actions', className)}>
      <h3 className={cn('main-page-actions__heading')}>{locale.heading}</h3>
      <div className={cn('main-page-actions__container')}>
        {screenMobileMaxMatches ? (
          <>
            {leftColumn.length > 0 && <div className={cn('main-page-actions__column')}>{leftColumn}</div>}
            {rightColumn.length > 0 && <div className={cn('main-page-actions__column')}>{rightColumn}</div>}
          </>
        ) : (
          <>
            {leftColumn}
            {rightColumn}
          </>
        )}
      </div>
    </Paper>
  );
};
