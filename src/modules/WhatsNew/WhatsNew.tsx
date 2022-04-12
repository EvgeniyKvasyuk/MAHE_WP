import React from 'react';

import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import { StatusEnum } from '@common/constants';
import { useIgnoreEffectDeps } from '@common/hooks';
import { Divider } from '@components/Divider';
import { Link } from '@components/Link';
import { List, ListItem } from '@components/List';
import { NumberCircle } from '@components/NumberCircle';
import { Paper } from '@components/Paper';
import { SvgIcon, IconType } from '@components/SvgIcon';
import { Typography } from '@components/Typography';
import { getUnreadMessagesCount, unreadCountSelector } from '@modules/Messages';

import styles from './WhatsNew.module.css';
import { WHATS_NEW } from './constants';
import { locale } from './locale';

const cn = classNames.bind(styles);

export function WhatsNew() {
  const dispatch = useDispatch();
  const { count, status } = useSelector(unreadCountSelector);

  useIgnoreEffectDeps(() => {
    if (status !== StatusEnum.Pending) dispatch(getUnreadMessagesCount());
  });

  return (
    <Paper className={cn('whats-new')}>
      <Typography className={cn('whats-new__heading')} variant="h3">
        {locale.heading}
      </Typography>
      <List className={cn('whats-new__list')}>
        {WHATS_NEW.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem className={cn('whats-new__item')}>
              <div className={cn('whats-new__icon-text')}>
                <SvgIcon className={cn('whats-new__icon')} icon={item.icon as IconType} />
                <Link className={cn('whats-new__link')} to={item.to}>
                  {item.title}
                </Link>
              </div>
              {item?.showUnreadCount && count > 0 && <NumberCircle count={count} />}
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}
