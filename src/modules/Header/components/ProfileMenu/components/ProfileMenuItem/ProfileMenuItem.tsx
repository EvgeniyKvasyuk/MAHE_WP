import React, { ReactNode } from 'react';

import classNames from 'classnames/bind';

import { Divider } from '@components/Divider';
import { MenuItem } from '@components/Menu';

import styles from './ProfileMenuItem.module.css';

const cn = classNames.bind(styles);

export interface ProfileMenuItemProps {
  className?: string;
  noHover?: boolean;
  halfPadding?: boolean;
  children: ReactNode;
  leftIcon?: string;
}

export function ProfileMenuItem({ className, noHover, children, halfPadding, leftIcon }: ProfileMenuItemProps) {
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
      </MenuItem>
      <Divider />
    </>
  );
}
