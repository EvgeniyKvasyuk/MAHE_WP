import React, { useCallback } from 'react';

import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';

import { Menu, MenuItem } from '@components/Menu';

import { TabProps } from '../../horizontal-menu-types';
import { getMenuId } from '../../utils';
import styles from './SubMenu.module.css';

export type MenuProps = {
  closeMenu: VoidFunction;
  hoveredTabId: number | null;
  menuAnchorEl: HTMLElement | null;
  menuItemsWithSubMenu: Array<TabProps>;
  selectTabAndNavigate: (tabId: number, path: string) => unknown;
};

const cn = classNames.bind(styles);

export function SubMenu({
  closeMenu,
  hoveredTabId,
  menuAnchorEl,
  menuItemsWithSubMenu,
  selectTabAndNavigate,
}: MenuProps) {
  const location = useLocation();

  const isMenuItemSelected = useCallback(
    (pathName: string): boolean => {
      return location.pathname === pathName;
    },
    [location.pathname],
  );

  return (
    <>
      {menuItemsWithSubMenu.map(
        (tab) =>
          tab.subMenuItems &&
          tab.subMenuItems.length > 0 && (
            <Menu
              key={tab.id}
              id={getMenuId(tab.id)}
              anchorEl={menuAnchorEl}
              className={cn('sub-menu')}
              open={hoveredTabId === tab.id}
              onClose={closeMenu}
              MenuListProps={{ onMouseLeave: closeMenu }}
              PopoverClasses={{
                paper: cn('sub-menu__popover'),
              }}
            >
              {tab.subMenuItems.map((subMenuItem) => (
                <MenuItem
                  className={cn('sub-menu__menu-item')}
                  selected={isMenuItemSelected(`${tab.to}${subMenuItem.to}`)}
                  onClick={() => selectTabAndNavigate(tab.id, `${tab.to}${subMenuItem.to}`)}
                  key={subMenuItem.to}
                >
                  {subMenuItem.label}
                </MenuItem>
              ))}
            </Menu>
          ),
      )}
    </>
  );
}
