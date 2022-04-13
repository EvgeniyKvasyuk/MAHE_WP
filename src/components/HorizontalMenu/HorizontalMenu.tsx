import React, { useCallback, useMemo, useState } from 'react';

import classNames from 'classnames/bind';
import { useLocation, useNavigate } from 'react-router-dom';

import { isTouchDevice } from '@common/utils';
import { AppBar } from '@components/AppBar';
import { Tab, Tabs } from '@components/Tabs';
import { useFlippers } from '@modules/flippers';

import styles from './HorizontalMenu.module.css';
import { SubMenu } from './components';
import { useOpenOnHover } from './hooks';
import { TabProps } from './horizontal-menu-types';
import { getInitialTabId, getTabById } from './utils';

const cn = classNames.bind(styles);

export interface HorizontalMenuProps {
  menuItemList: Array<TabProps>;
  className?: string;
}

export function HorizontalMenu({ menuItemList, className }: HorizontalMenuProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const getFlipperValue = useFlippers();

  const visibleMenuItems = useMemo(() => {
    return menuItemList.filter((menuItem) => (menuItem.flipper ? !getFlipperValue(menuItem.flipper) : true));
  }, [menuItemList, getFlipperValue]);

  const [selectedTab, setSelectedTab] = useState(() => getInitialTabId(location.pathname, visibleMenuItems));

  const { closeMenu, handleTabMouseLeave, handleTouchStart, handleTabMouseOver, hoveredTabId, menuAnchorEl } =
    useOpenOnHover();

  const selectTabAndNavigate = useCallback(
    (tabId: number, path: string) => {
      if (path) {
        setSelectedTab(tabId);
        navigate(path);
      }
    },
    [navigate],
  );

  const handleTabChange = useCallback(
    (event, newId) => {
      const tabIndex = getTabById(newId, visibleMenuItems);
      const tab = visibleMenuItems[tabIndex];

      if (tab.to) {
        selectTabAndNavigate(newId, tab.to);
        if (!isTouchDevice()) {
          closeMenu();
        }
      }
    },
    [visibleMenuItems, selectTabAndNavigate, closeMenu],
  );

  const menuItemsWithSubMenu = useMemo(
    () => visibleMenuItems.filter((menuItem) => menuItem.subMenuItems?.length),
    [visibleMenuItems],
  );

  return (
    <AppBar className={cn('horizontal-menu', className)}>
      <Tabs onChange={handleTabChange} value={selectedTab}>
        {visibleMenuItems.map((tab) => (
          <Tab
            key={tab.id}
            value={tab.id}
            label={tab.label}
            onMouseOver={tab.subMenuItems ? handleTabMouseOver(tab.id) : undefined}
            onMouseLeave={tab.subMenuItems ? handleTabMouseLeave : undefined}
            onTouchStart={tab.subMenuItems ? handleTouchStart(tab.id) : undefined}
            selected={tab.id === selectedTab}
            hovered={tab.id === hoveredTabId}
            className={cn('horizontal-menu__tab')}
          />
        ))}
      </Tabs>

      <SubMenu
        closeMenu={closeMenu}
        hoveredTabId={hoveredTabId}
        menuAnchorEl={menuAnchorEl}
        menuItemsWithSubMenu={menuItemsWithSubMenu}
        selectTabAndNavigate={selectTabAndNavigate}
      />
    </AppBar>
  );
}
