import React, { useCallback, useState } from 'react';

import TabsMaterial from '@mui/material/Tabs';
import classNames from 'classnames/bind';

import styles from './Tabs.module.css';
import { Tab } from './components/Tab';
import { TabsProps } from './tabs-types';

const cn = classNames.bind(styles);

export function Tabs({ tabList = [], children, className, onChange, selectionFollowsFocus, value = 0 }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabSelect = useCallback((event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  }, []);

  return (
    <TabsMaterial
      className={cn('tabs', className)}
      onChange={onChange || handleTabSelect}
      value={value || selectedTab}
      selectionFollowsFocus={selectionFollowsFocus}
      TabIndicatorProps={{ className: cn('tabs__indicator') }}
    >
      {!children &&
        tabList.map((tab) => {
          return <Tab value={tab.id} key={tab.id} label={tab.label} selected={tab.id === selectedTab} />;
        })}

      {!tabList.length && children}
    </TabsMaterial>
  );
}
