import React from 'react';

import { Meta } from '@storybook/react';

import { Button as ButtonComponent, ButtonProps } from '../Button';
import { COMPONENT } from './constants';

export default {
  title: COMPONENT.TITLE,
  component: ButtonComponent,
  parameters: {
    docs: {
      description: {
        component: COMPONENT.DESCRIPTION,
      },
    },
  },
} as Meta<ButtonProps>;

export function Button(): JSX.Element {
  return (
    <div>
      <div>
        <h2>Color primary</h2>
        <ButtonComponent startIcon="message" variant="text">
          Firstname Lastname
        </ButtonComponent>{' '}
        <ButtonComponent variant="contained">Firstname Lastname</ButtonComponent>{' '}
        <ButtonComponent variant="outlined">Firstname Lastname</ButtonComponent>{' '}
        <ButtonComponent variant="contained" startIcon="message">
          Firstname Lastname
        </ButtonComponent>{' '}
        <ButtonComponent disabled>Disabled</ButtonComponent>
      </div>{' '}
      <div>
        <h2>Color Warning</h2>
        <ButtonComponent variant="text" color="warning">
          Firstname Lastname
        </ButtonComponent>{' '}
        <ButtonComponent variant="contained" color="warning">
          Firstname Lastname
        </ButtonComponent>{' '}
        <ButtonComponent variant="outlined" color="warning">
          Firstname Lastname
        </ButtonComponent>{' '}
        <ButtonComponent variant="contained" color="warning">
          Firstname Lastname
        </ButtonComponent>
      </div>
      <div>
        <h2>Size Small</h2>
        <ButtonComponent variant="text" size="small">
          Firstname Lastname
        </ButtonComponent>{' '}
        <ButtonComponent variant="contained" size="small" color="warning">
          Firstname Lastname
        </ButtonComponent>
      </div>
      <div>
        <h2>Size Medium</h2>
        <ButtonComponent variant="text" size="large">
          Firstname Lastname
        </ButtonComponent>{' '}
        <ButtonComponent variant="contained" size="medium" color="warning">
          Firstname Lastname
        </ButtonComponent>
      </div>
      <div>
        <h2>Size Large</h2>
        <ButtonComponent variant="text" size="large">
          Firstname Lastname
        </ButtonComponent>{' '}
        <ButtonComponent variant="contained" size="large" color="warning">
          Firstname Lastname
        </ButtonComponent>
      </div>
    </div>
  );
}
