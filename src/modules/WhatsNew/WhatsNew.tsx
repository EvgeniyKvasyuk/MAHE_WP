import React from 'react';

import classNames from 'classnames/bind';

import { Divider } from '@components/Divider';
import { Link } from '@components/Link';
import { List, ListItem } from '@components/List';
import { NumberCircle } from '@components/NumberCircle';
import { Paper } from '@components/Paper';
import { SvgIcon, IconType } from '@components/SvgIcon';

import styles from './WhatsNew.module.css';
import { WHATS_NEW } from './constants';
import { locale } from './locale';

const cn = classNames.bind(styles);

export function WhatsNew() {
  return (
    <Paper className={cn('whats-new')}>
      <h3 className={cn('whats-new__heading')}>{locale.heading}</h3>
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
              {item.number && <NumberCircle count={item.number} />}
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}
