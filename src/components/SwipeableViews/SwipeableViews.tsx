import React from 'react';

import ReactSwipeableViews, { SwipeableViewsProps as ReactSwipeableViewsProps } from 'react-swipeable-views';

export type ReactSwipeableProps = Pick<
  ReactSwipeableViewsProps,
  'children' | 'index' | 'onChangeIndex' | 'axis' | 'className'
>;

export function SwipeableViews({ index, onChangeIndex, axis, children, className }: ReactSwipeableProps) {
  return (
    <ReactSwipeableViews index={index} onChangeIndex={onChangeIndex} axis={axis} className={className}>
      {children}
    </ReactSwipeableViews>
  );
}
