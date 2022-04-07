import React, { useCallback, useMemo, useState } from 'react';

import classNames from 'classnames/bind';
import { useLocation, useNavigate } from 'react-router-dom';

import { AppBar } from '@components/AppBar';
import { Tab, Tabs } from '@components/Tabs';

import styles from './HorizontalMenu.module.css';
import { SubMenu } from './components';
import { TabProps } from './horizontal-menu-types';
import { getInitialTabId, getTabById, isElementInPopup } from './utils';

const cn = classNames.bind(styles);

export interface HorizontalMenuProps {
  menuItemList: Array<TabProps>;
  className?: string;
}

export function HorizontalMenu({ menuItemList, className }: HorizontalMenuProps) {
  const location = useLocation();

  const [selectedTab, setSelectedTab] = useState(() => getInitialTabId(location.pathname, menuItemList));
  const [hoveredTabId, setHoveredTabId] = useState<number | null>(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const closeMenu = useCallback(() => {
    setMenuAnchorEl(null);
    setHoveredTabId(null);
  }, []);

  const handleOpenMenu = useCallback(
    (currentTarget: HTMLElement) => {
      if (currentTarget !== menuAnchorEl) {
        setMenuAnchorEl(currentTarget);
      }
    },
    [menuAnchorEl],
  );

  const handleTabMouseOver = (tabId: number) => (event: React.MouseEvent<HTMLElement>) => {
    if (tabId !== hoveredTabId) {
      setHoveredTabId(tabId);
      handleOpenMenu(event.currentTarget);
    }
  };

  const handleTabMouseLeave = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (!isElementInPopup(event.relatedTarget as HTMLElement, menuAnchorEl as HTMLElement, hoveredTabId)) {
        setHoveredTabId(null);
        setMenuAnchorEl(null);
      }
    },
    [menuAnchorEl, hoveredTabId],
  );

  const selectTabAndNavigate = useCallback(
    (tabId: number, path: string) => {
      if (path) {
        setSelectedTab(tabId);
        navigate(path);
        closeMenu();
      }
    },
    [navigate, closeMenu],
  );

  const handleTabChange = useCallback(
    (event, newId) => {
      const tabIndex = getTabById(newId, menuItemList);
      const tab = menuItemList[tabIndex];

      if (tab.to && !tab.subMenuItems) {
        selectTabAndNavigate(newId, tab.to);
      }
    },
    [menuItemList, selectTabAndNavigate],
  );

  const menuItemsWithSubMenu = useMemo(
    () => menuItemList.filter((menuItem) => menuItem.subMenuItems?.length),
    [menuItemList],
  );

  return (
    <AppBar className={cn('horizontal-menu', className)}>
      <Tabs onChange={handleTabChange} value={selectedTab}>
        {menuItemList.map((tab) => (
          <Tab
            key={tab.id}
            value={tab.id}
            label={tab.label}
            onMouseOver={tab.subMenuItems ? handleTabMouseOver(tab.id) : undefined}
            onMouseLeave={handleTabMouseLeave}
            selected={tab.id === selectedTab}
            hovered={tab.id === hoveredTabId}
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
