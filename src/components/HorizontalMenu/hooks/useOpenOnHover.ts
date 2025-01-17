import React, { useCallback, useState } from 'react';

import { isElementInPopup } from '../utils';

type OutputType = {
  closeMenu: VoidFunction;
  hoveredTabId: number | null;
  menuAnchorEl: HTMLElement | null;
  handleTabMouseOver: (tabId: number) => (event: React.MouseEvent<HTMLElement>) => unknown;
  handleTabMouseLeave: (event: React.MouseEvent<HTMLElement>) => unknown;
  handleTouchStart: (tabId: number) => (event: React.TouchEvent<HTMLDivElement>) => unknown;
};

export function useOpenOnHover(): OutputType {
  const [hoveredTabId, setHoveredTabId] = useState<number | null>(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = useCallback(
    (currentTarget: HTMLElement) => {
      if (currentTarget !== menuAnchorEl) {
        setMenuAnchorEl(currentTarget);
      }
    },
    [menuAnchorEl],
  );

  const closeMenu = useCallback(() => {
    setMenuAnchorEl(null);
    setHoveredTabId(null);
  }, []);

  const handleTouchStart = (tabId: number) => (event: React.TouchEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (tabId !== hoveredTabId) {
      setHoveredTabId(tabId);
      handleOpenMenu(event.currentTarget);
    } else {
      closeMenu();
    }
  };

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

  return {
    closeMenu,
    handleTabMouseLeave,
    handleTabMouseOver,
    handleTouchStart,
    hoveredTabId,
    menuAnchorEl,
  };
}
