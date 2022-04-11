import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Divider } from '@components/Divider';

import { List as ListComponent, ListProps } from '../List';
import { ListItem as ListItemComponent, ListItemText as ListItemTextComponent } from '../components';
import { COMPONENT } from './constants';

export default {
  title: COMPONENT.TITLE,
  component: ListComponent,
  subcomponents: { ListItemComponent, ListItemTextComponent },
  parameters: {
    docs: {
      description: {
        component: COMPONENT.DESCRIPTION,
      },
    },
  },
} as Meta<ListProps>;

export const List: Story<ListProps> = function () {
  return (
    <ListComponent style={{ width: '150px' }}>
      {[1, 2, 3, 4].map((num) => {
        return (
          <React.Fragment key={num}>
            <ListItemComponent>
              <ListItemTextComponent>{`Sample Text ${num}`}</ListItemTextComponent>
            </ListItemComponent>
            <Divider />
          </React.Fragment>
        );
      })}
    </ListComponent>
  );
};
