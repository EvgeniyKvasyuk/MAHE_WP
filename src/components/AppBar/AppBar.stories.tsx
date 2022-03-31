import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppBar as AppBarComponent } from './AppBar';

export default {
  title: 'App Bar',
  component: AppBarComponent,
} as ComponentMeta<typeof AppBarComponent>;

const AppBarContent = () => <div>Content for app bar</div>;

export const AppBar: ComponentStory<typeof AppBarComponent> = (args) => <AppBarComponent {...args} />;

AppBar.args = {
  children: <AppBarContent />,
};
