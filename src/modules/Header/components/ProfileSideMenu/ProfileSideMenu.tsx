import React, { useCallback, useState } from 'react';

import classNames from 'classnames/bind';

import { SideMenu, AnchorEnum } from '@components/SideMenu';

import { ProfileButton } from '../ProfileButton';
import { ProfileMenu } from '../ProfileMenu';
import styles from './ProfileSideMenu.module.css';
import { MENU_ITEMS } from './constants';

const cn = classNames.bind(styles);

export interface ProfileSideMenuProps {
  userFirstName: string;
  userLastName: string;
}

export function ProfileSideMenu({ userFirstName, userLastName }: ProfileSideMenuProps) {
  const [open, setOpen] = useState(false);

  const handleButtonClick = useCallback(() => {
    setOpen(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className={cn('profile-side-menu')}>
      <ProfileButton userFirstName={userFirstName} userLastName={userLastName} onClick={handleButtonClick} />

      <SideMenu anchor={AnchorEnum.right} open={open} onClose={handleCloseMenu}>
        <h2 className={cn('profile-side-menu__user-name')}>{`${userFirstName} ${userLastName}`}</h2>

        <ProfileMenu menuItems={MENU_ITEMS} />
      </SideMenu>
    </div>
  );
}
