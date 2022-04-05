import React, { useCallback, useState } from 'react';

import Tab from '@mui/material/Tab';
import TabsMaterial from '@mui/material/Tabs';
import classNames from 'classnames/bind';

import styles from './Tabs.module.css';
import { TabsProps } from './tabs-types';

const cn = classNames.bind(styles);

export function Tabs({ tabList, className, onChange, selectionFollowsFocus, value = 0 }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(value);
  const handleTabSelect = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setSelectedTab(newValue);
      onChange?.(event, newValue);
    },
    [onChange],
  );

  return (
    <TabsMaterial
      className={cn('tabs', className)}
      onChange={handleTabSelect}
      value={selectedTab}
      selectionFollowsFocus={selectionFollowsFocus}
      TabIndicatorProps={{ className: cn('tabs__indicator') }}
    >
      {tabList.map((tab) => {
        return (
          <Tab
            component="a"
            value={tab.id}
            key={tab.id}
            label={tab.label}
            className={cn('tabs__item', {
              'tabs__item--selected': tab.id === selectedTab,
            })}
          />
        );
      })}
    </TabsMaterial>
  );
}
