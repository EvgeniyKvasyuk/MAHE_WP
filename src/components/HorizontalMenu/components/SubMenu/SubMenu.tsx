import React, { useCallback } from 'react';

import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';

import { Menu, MenuItem } from '@components/Menu';
import { Flipper } from '@modules/flippers';

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

  const handleMenuItemClick = (tabId: number, path: string) => () => {
    selectTabAndNavigate(tabId, path);
    closeMenu();
  };

  return (
    <>
      {menuItemsWithSubMenu.map(
        (tab) =>
          tab.subMenuItems &&
          tab.subMenuItems.length > 0 && (
            <Flipper flipper={tab.flipper} key={tab.id}>
              <Menu
                id={getMenuId(tab.id)}
                anchorEl={menuAnchorEl}
                className={cn('sub-menu')}
                open={hoveredTabId === tab.id}
                onClose={closeMenu}
                MenuListProps={{ onMouseLeave: closeMenu, className: cn('sub-menu__list') }}
              >
                {tab.subMenuItems.map((subMenuItem) => {
                  const path = `${tab.to}${subMenuItem.to}`;
                  const selected = isMenuItemSelected(path);

                  return (
                    <MenuItem
                      className={cn('sub-menu__menu-item', {
                        'sub-menu__menu-item--select': selected,
                      })}
                      selected={selected}
                      onClick={handleMenuItemClick(tab.id, path)}
                      key={subMenuItem.to}
                    >
                      {subMenuItem.label}
                    </MenuItem>
                  );
                })}
              </Menu>
            </Flipper>
          ),
      )}
    </>
  );
}
