import React from 'react';

import classNames from 'classnames/bind';

import { Divider } from '@components/Divider';
import { Link } from '@components/Link';
import { List, ListItem } from '@components/List';
import { SizesEnum } from '@components/NumberCircle';
import { Paper } from '@components/Paper';
import { SvgIcon, IconType } from '@components/SvgIcon';
import { Typography } from '@components/Typography';
import { UnreadMessagesBadge } from '@modules/Messages';

import styles from './WhatsNew.module.css';
import { WHATS_NEW } from './constants';
import { locale } from './locale';

const cn = classNames.bind(styles);

type Props = {
  className?: string;
};

export function WhatsNew({ className }: Props) {
  return (
    <Paper className={cn('whats-new', className)}>
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
              {item?.showUnreadCount && <UnreadMessagesBadge size={SizesEnum.Small} />}
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}
