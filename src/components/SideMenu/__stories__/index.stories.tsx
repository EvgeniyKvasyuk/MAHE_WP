import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Button } from '@components/Button';

import { SideMenu as SideMenuComponent, SideMenuProps, AnchorEnum } from '../SideMenu';
import { COMPONENT } from './constants';

export default {
  title: COMPONENT.TITLE,
  component: SideMenuComponent,
  parameters: {
    docs: {
      description: {
        component: COMPONENT.DESCRIPTION,
      },
    },
  },
} as Meta<SideMenuProps>;

export const SideMenu: Story<SideMenuProps> = () => {
  const [open, setState] = React.useState(false);

  const toggleDrawer = () => {
    setState(!open);
  };

  return (
    <>
      <Button variant="contained" onClick={toggleDrawer}>
        {AnchorEnum.left}
      </Button>
      <SideMenuComponent anchor={AnchorEnum.left} onClose={toggleDrawer} open={open}>
        <div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <div style={{ padding: '1rem' }}>First item</div>
          <div style={{ padding: '1rem' }}>Second item</div>
        </div>
      </SideMenuComponent>
    </>
  );
};
