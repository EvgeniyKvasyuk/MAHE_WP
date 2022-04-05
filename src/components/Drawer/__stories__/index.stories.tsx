import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Drawer as DrawerComponent, DrawerProps } from '../Drawer';
import { COMPONENT } from './constants';

export default {
  title: COMPONENT.TITLE,
  component: DrawerComponent,
  parameters: {
    docs: {
      description: {
        component: COMPONENT.DESCRIPTION,
      },
    },
  },
} as Meta<DrawerProps>;

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const Drawer: Story<DrawerProps> = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <div style={{ padding: '1rem' }}>First item</div>
      <div style={{ padding: '1rem' }}>Second item</div>
    </div>
  );

  return (
    <>
      {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <button type="button" onClick={toggleDrawer(anchor, true)} style={{ marginRight: '1rem', padding: '1rem' }}>
            {anchor}
          </button>
          <DrawerComponent anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </DrawerComponent>
        </React.Fragment>
      ))}
    </>
  );
};
