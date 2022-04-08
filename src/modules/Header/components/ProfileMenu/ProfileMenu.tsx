import React, { ReactNode } from 'react';

import { Link } from '@components/Link';

import { ProfileMenuItem } from './components';

export type MenuItemType = {
  to?: string;
  icon?: string;
  label?: string;
  component?: ReactNode;
  noHover?: boolean;
};

export interface ProfileMenuProps {
  menuItems: Array<MenuItemType>;
}

export function ProfileMenu({ menuItems }: ProfileMenuProps) {
  const renderMenuItem = (menuItem: MenuItemType) => {
    if (menuItem.to) {
      return (
        <Link to={menuItem.to}>
          <ProfileMenuItem leftIcon={menuItem.icon}>{menuItem.label}</ProfileMenuItem>
        </Link>
      );
    }

    return (
      <ProfileMenuItem leftIcon={menuItem.icon} noHover={menuItem.noHover}>
        {menuItem.component || menuItem.label}
      </ProfileMenuItem>
    );
  };

  return <div>{menuItems.map(renderMenuItem)}</div>;
}
