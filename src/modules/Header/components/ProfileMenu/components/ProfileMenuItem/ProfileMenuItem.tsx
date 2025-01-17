import React, { ReactNode } from 'react';

import classNames from 'classnames/bind';

import { Divider } from '@components/Divider';
import { MenuItem } from '@components/Menu';
import { IconType } from '@components/SvgIcon';

import styles from './ProfileMenuItem.module.css';

const cn = classNames.bind(styles);

export interface ProfileMenuItemProps {
  className?: string;
  noHover?: boolean;
  halfPadding?: boolean;
  children: ReactNode;
  badge?: ReactNode;
  leftIcon?: IconType;
}

export function ProfileMenuItem({ className, noHover, children, halfPadding, leftIcon, badge }: ProfileMenuItemProps) {
  return (
    <>
      <MenuItem
        className={cn('profile-menu-item', className, {
          'profile-menu-item--half-padding': halfPadding,
        })}
        noHover={noHover}
        leftIcon={leftIcon}
      >
        {children}

        {!!badge && <div className={cn('profile-menu-item__badge')}>{badge}</div>}
      </MenuItem>
      <Divider />
    </>
  );
}
