import React from 'react';

import { Meta, Story } from '@storybook/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Link as LinkComponent } from '../Link';
import { LinkProps } from '../link-types';
import { COMPONENT } from './constants';

export default {
  title: COMPONENT.TITLE,
  component: LinkComponent,
  parameters: {
    docs: {
      description: {
        component: COMPONENT.DESCRIPTION,
      },
    },
  },
  args: {
    to: '/1',
    children: 'Usual link to 1',
  },
} as Meta<LinkProps>;

export const Link: Story<LinkProps> = (args) => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<LinkComponent {...args} />} />
      </Routes>
    </Router>
  );
};
