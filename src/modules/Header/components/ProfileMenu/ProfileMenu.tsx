import React, { ReactNode } from 'react';

import { Link } from '@components/Link';
import { IconType } from '@components/SvgIcon';
import { useFlippers, FlippersEnum } from '@modules/flippers';

import { ProfileMenuItem } from './components';

export type MenuItemType = {
  to?: string;
  icon?: IconType;
  label?: string;
  component?: ReactNode;
  noHover?: boolean;
  flipper?: FlippersEnum;
  badge?: ReactNode;
};

export interface ProfileMenuProps {
  menuItems: Array<MenuItemType>;
}

export function ProfileMenu({ menuItems }: ProfileMenuProps) {
  const getFlipperValue = useFlippers();

  const renderMenuItem = (menuItem: MenuItemType, index: number) => {
    const key = menuItem.label || menuItem.to || index;

    if (menuItem.flipper && getFlipperValue(menuItem.flipper)) {
      return null;
    }

    if (menuItem.to) {
      return (
        <Link to={menuItem.to} key={key}>
          <ProfileMenuItem leftIcon={menuItem.icon} badge={menuItem.badge}>
            {menuItem.label}
          </ProfileMenuItem>
        </Link>
      );
    }

    return (
      <ProfileMenuItem leftIcon={menuItem.icon} noHover={menuItem.noHover} badge={menuItem.badge} key={key}>
        {menuItem.component || menuItem.label}
      </ProfileMenuItem>
    );
  };

  return <div>{menuItems.map(renderMenuItem)}</div>;
}
