// TODO-Vladislav write tests on utils
import { TabProps } from './horizontal-menu-types';

export const getMenuId = (id: number) => `sub-menu-${id}`;

export const getTabById = (tabId: number, tabList: Array<TabProps>) => tabList.findIndex(({ id }) => id === tabId);

export const isElementInPopup = (element: HTMLElement, anchorEl: HTMLElement, id: number | null): boolean => {
  if (!id || !element) {
    return false;
  }
  const menuElement = document.getElementById(getMenuId(id));

  return !!menuElement?.contains?.(element);
};

const matchPath = (pathName: string, to: string): boolean => {
  const splittedPathName = pathName.split('/').filter(Boolean);

  return splittedPathName.includes(to.replace('/', ''));
};

export const getInitialTabId = (pathname: string, tabList: Array<TabProps>) => {
  const tab = tabList.find(({ to }) => matchPath(pathname, to));

  return tab?.id;
};
