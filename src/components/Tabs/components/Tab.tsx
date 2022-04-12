/* we need pass restProps to make tab works */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

import TabMaterial, { TabProps } from '@mui/material/Tab';
import classNames from 'classnames/bind';

import styles from './Tab.module.css';

const cn = classNames.bind(styles);

export type MenuProps = {
  className?: string;
  selected?: boolean;
  hovered?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>, value: TabProps['value']) => unknown;
  onMouseOver?: (event: React.MouseEvent<HTMLElement>) => unknown;
  onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => unknown;
  onTouchStart?: (event: React.TouchEvent<HTMLDivElement>) => unknown;
} & Pick<TabProps, 'label' | 'onChange' | 'value'>;

export function Tab({
  label,
  className,
  value,
  onClick,
  onMouseOver,
  onMouseLeave,
  onTouchStart,
  selected = false,
  hovered = false,
  onChange,
  ...restProps
}: MenuProps) {
  const handleTabClick = (event: React.MouseEvent<HTMLElement>) => {
    onClick?.(event, value);
  };

  return (
    <TabMaterial
      value={value}
      label={label}
      onMouseOver={onMouseOver}
      onTouchStart={onTouchStart}
      onMouseLeave={onMouseLeave}
      onClick={handleTabClick}
      onChange={onChange}
      className={cn('tab', className, {
        'tab--selected': selected,
        'tab--hover': hovered,
      })}
      {...restProps}
    />
  );
}
