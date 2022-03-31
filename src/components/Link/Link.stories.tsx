import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Link as LinkComponent } from './Link';

export default {
  title: 'Link',
  component: LinkComponent,
} as ComponentMeta<typeof LinkComponent>;

export const Link: ComponentStory<typeof LinkComponent> = (args) => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<LinkComponent {...args} />} />
      </Routes>
    </Router>
  );
};

Link.args = {
  to: '/1',
  children: 'Usual link to 1',
};
