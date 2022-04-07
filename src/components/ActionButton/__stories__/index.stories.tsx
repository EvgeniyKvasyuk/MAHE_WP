import React from 'react';

import { Meta } from '@storybook/react';

import { ReactComponent as Scheduled } from '@assets/schedule.svg';

import { ActionButton as ActionButtonComponent, ActionButtonProps } from '../ActionButton';
import { COMPONENT } from './constants';

export default {
  title: COMPONENT.TITLE,
  component: ActionButtonComponent,
  parameters: {
    docs: {
      description: {
        component: COMPONENT.DESCRIPTION,
      },
    },
  },
} as Meta<ActionButtonProps>;

export function ActionButton(): JSX.Element {
  const handleClick = () => {
    console.log('ActionButtonClicked');
  };

  return (
    <div>
      <h3>Predefined icon</h3>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px' }}>
          <ActionButtonComponent onClick={handleClick} title="Schedule an appointment" icon="schedule" />
        </div>
        <div style={{ marginRight: '20px' }}>
          <ActionButtonComponent onClick={handleClick} title="Refill a prescription" icon="refill" />
        </div>
        <div style={{ marginRight: '20px' }}>
          <ActionButtonComponent onClick={handleClick} title="Send a message" icon="message" />
        </div>
      </div>
      <div>
        <h3>Custom icon</h3>
        <ActionButtonComponent onClick={handleClick} title="View your Health Records" icon={Scheduled} />
      </div>
      <div>
        <h3>Disabled</h3>
        <ActionButtonComponent onClick={handleClick} title="View your Health Records" icon={Scheduled} disabled />
      </div>
    </div>
  );
}
