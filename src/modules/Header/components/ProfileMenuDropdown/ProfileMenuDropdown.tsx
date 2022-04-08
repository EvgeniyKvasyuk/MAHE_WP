import React, { useCallback, useState } from 'react';

import classNames from 'classnames/bind';

import { ROUTES } from '@common/routes';
import { Button } from '@components/Button';
import { Menu } from '@components/Menu';

import { ProfileMenu } from '../ProfileMenu';
import { ViewSwitcher } from '../ViewSwitcher';
import styles from './ProfileMenuDropdown.module.css';
import { locale } from './locale';

const cn = classNames.bind(styles);

export interface ProfileMenuProps {
  triggerButtonText: string;
}

const MENU_ITEMS = [
  {
    icon: 'account_circle',
    to: ROUTES.PROFILE,
    label: locale.links.profile,
  },
  {
    component: <ViewSwitcher />,
    noHover: true,
  },
  {
    icon: 'mail-outline',
    to: ROUTES.MESSAGES,
    label: locale.links.messages,
  },
];

const MENU_ID = 'basic-menu';
const TRIGGER_ID = 'basic-button';

export function ProfileMenuDropdown({ triggerButtonText }: ProfileMenuProps) {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(menuAnchorEl);

  const handleTriggerButtonClick = useCallback(
    (event) => {
      if (menuAnchorEl !== event.currentTarget) {
        setMenuAnchorEl(event.currentTarget);
      }
    },
    [menuAnchorEl],
  );

  const handleCloseMenu = useCallback(() => {
    setMenuAnchorEl(null);
  }, []);

  return (
    <div className={cn('profile-menu')}>
      <Button
        endIcon="expand_more"
        onClick={handleTriggerButtonClick}
        id={TRIGGER_ID}
        variant={open ? 'contained' : 'text'}
        aria-controls={open ? MENU_ID : undefined}
        aria-haspopup="true"
        aria-expanded={open ? true : undefined}
      >
        {triggerButtonText}
      </Button>

      <Menu
        id={MENU_ID}
        anchorEl={menuAnchorEl}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': TRIGGER_ID,
          className: cn('profile-menu__content'),
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <ProfileMenu menuItems={MENU_ITEMS} />
      </Menu>
    </div>
  );
}
