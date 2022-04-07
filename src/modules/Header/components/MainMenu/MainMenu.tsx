import React, { useCallback, useMemo, useState } from 'react';

import classNames from 'classnames/bind';
import { useNavigate, useLocation, matchPath } from 'react-router-dom';

import { ROUTES } from '@common/routes';
import { AppBar } from '@components/AppBar';
import { Drawer } from '@components/Drawer';
import { Tabs } from '@components/Tabs';

import { HeaderState } from '../../store';
import styles from './MainMenu.module.css';
import { locale } from './locale';

const cn = classNames.bind(styles);

export interface MainMenuProps {
  mainMenuToggleHandler: VoidFunction;
  mainMenuOpen: HeaderState['mainMenuOpen'];
}

const tabList = [
  {
    id: 0,
    label: locale.links.home,
    to: ROUTES.MAIN_PAGE,
  },
  {
    id: 1,
    label: locale.links.appointments,
    to: ROUTES.APPOINTMENTS,
  },
];

export function MainMenu({ mainMenuToggleHandler, mainMenuOpen }: MainMenuProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const initialTabId = useMemo(() => {
    const tab = tabList.find(({ to }) => matchPath(to, location.pathname));

    return tab?.id;
  }, []);

  const [selectedTab, setSelectedTab] = useState(initialTabId);

  const handleTabSelect = useCallback(
    (event: React.SyntheticEvent, newId: number) => {
      setSelectedTab(newId);
      const tabIndex = tabList.findIndex(({ id }) => id === newId);
      navigate(tabList[tabIndex].to);
    },
    [navigate],
  );

  const renderMenuItems = () => {
    return <Tabs selectionFollowsFocus value={selectedTab} onChange={handleTabSelect} tabList={tabList} />;
  };

  return (
    <AppBar className={cn('main-menu')}>
      {renderMenuItems()}

      <Drawer open={mainMenuOpen} onClose={mainMenuToggleHandler}>
        <div className={cn('main-menu__content')}>{renderMenuItems()}</div>
      </Drawer>
    </AppBar>
  );
}
