import React from 'react';

import classNames from 'classnames/bind';

import { Button } from '@components/Button';
import { Link } from '@components/Link';
import { List, ListItem } from '@components/List';
import { Paper } from '@components/Paper';
import { SvgIcon, IconType } from '@components/SvgIcon';
import { Typography } from '@components/Typography';

import styles from './QuickLinks.module.css';
import { QUICK_LINKS } from './constants';
import { locale } from './locale';

const cn = classNames.bind(styles);

export function QuickLinks() {
  return (
    <Paper className={cn('quick-links')}>
      <Typography className={cn('quick-links__heading')} variant="h3">
        {locale.heading}
      </Typography>
      <List className={cn('quick-links__list')}>
        {QUICK_LINKS.map((link) => {
          return (
            <ListItem className={cn('quick-links__list-item')} key={link.id}>
              {link.action ? (
                <Button disableRipple onClick={link.action} className={cn('quick-links__button')} noHover>
                  <div className={cn('quick-links__button-content')}>
                    <div>Connect Your Device</div>
                    <SvgIcon className={cn('quick-links__icon')} icon={'arrowRight' as IconType} />
                  </div>
                </Button>
              ) : (
                <Link className={cn('quick-links__link')} to={link.to}>
                  <div className={cn('quick-links__link-content')}>
                    <div>{link.title}</div>
                    <SvgIcon className={cn('quick-links__icon')} icon={'arrowRight' as IconType} />
                  </div>
                </Link>
              )}
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
}
