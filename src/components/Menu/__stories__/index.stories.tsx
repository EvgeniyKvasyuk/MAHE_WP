import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Divider } from '@components/Divider';

import { Menu as MenuComponent, MenuProps } from '../Menu';
import { MenuItem } from '../components';
import { COMPONENT } from './constants';

export default {
  title: COMPONENT.TITLE,
  component: MenuComponent,
  subcomponents: { MenuItem },
  parameters: {
    docs: {
      description: {
        component: COMPONENT.DESCRIPTION,
      },
    },
  },
} as Meta<MenuProps>;

export const Menu: Story<MenuProps> = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement> | React.FocusEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        type="button"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ marginRight: '10px' }}
      >
        Open By Click
      </button>
      <button
        type="button"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleClick}
        onFocus={handleClick}
      >
        Open By Hover
      </button>
      <MenuComponent
        MenuListProps={{ onMouseLeave: handleClose }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </MenuComponent>
    </div>
  );
};
