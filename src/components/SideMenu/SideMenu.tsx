import React, { ReactNode } from 'react';

import classNames from 'classnames/bind';

import { Drawer } from '@components/Drawer';
import { SvgIcon } from '@components/SvgIcon';

import styles from './SideMenu.module.css';

const cn = classNames.bind(styles);

export enum AnchorEnum {
  left = 'left',
  right = 'right',
}

export interface SideMenuProps {
  anchor?: AnchorEnum;
  children: ReactNode;
  onClose: VoidFunction;
  open: boolean;
}

export function SideMenu({ anchor = AnchorEnum.left, children, onClose, open }: SideMenuProps) {
  return (
    <Drawer
      className={cn('side-menu')}
      paperClassName={cn('side-menu__paper')}
      anchor={AnchorEnum.left}
      open={open}
      onClose={onClose}
    >
      <div className={cn('side-menu__header')}>
        <SvgIcon
          icon="close"
          className={cn('side-menu__close-icon', {
            'side-menu__close-icon--visible': anchor === AnchorEnum.left,
          })}
          onClick={onClose}
        />

        <SvgIcon icon="mainLogo" className={cn('side-menu__logo')} viewBox="0 0 220 70" />

        <SvgIcon
          icon="close"
          className={cn('side-menu__close-icon', 'side-menu__close-icon--right', {
            'side-menu__close-icon--visible': anchor === AnchorEnum.right,
          })}
          onClick={onClose}
        />
      </div>

      <div className={cn('side-menu__body')}>{children}</div>
    </Drawer>
  );
}
