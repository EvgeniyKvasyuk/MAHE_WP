import React, { ReactElement, ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from './InnerLayout.module.css';

const cn = classNames.bind(styles);

type InnerLayoutProps = {
  children: ReactNode;
  leftSidebar?: Nullable<ReactElement>;
  rightSidebar?: Nullable<ReactElement>;
  className?: string;
};

export function InnerLayout({ leftSidebar, rightSidebar, children, className }: InnerLayoutProps) {
  return (
    <div className={cn('inner-layout', className)}>
      {leftSidebar && <div className={cn('inner-layout__left-sidebar')}>{leftSidebar}</div>}
      <div className={cn('inner-layout__content')}>{children}</div>
      {rightSidebar && <div className={cn('inner-layout__right-sidebar')}>{rightSidebar}</div>}
    </div>
  );
}
