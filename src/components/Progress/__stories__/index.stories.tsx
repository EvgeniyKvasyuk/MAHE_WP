import React from 'react';

import { Meta } from '@storybook/react';

import { Progress as ProgressComponent, ProgressProps } from '../Progress';
import { ProgressType } from '../constants';
import { COMPONENT } from './constants';

export default {
  title: COMPONENT.TITLE,
  component: ProgressComponent,
  parameters: {
    docs: {
      description: {
        component: COMPONENT.DESCRIPTION,
      },
    },
  },
} as Meta<ProgressProps>;

export function Progress(): JSX.Element {
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <ProgressComponent value={20} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h3>Secondary</h3>
        <ProgressComponent type={ProgressType.Secondary} value={20} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h3>With max value and labels</h3>
        <ProgressComponent type={ProgressType.Secondary} value={20} maxValue={300} startLabel="0" endLabel={300} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h3>With only end label</h3>
        <ProgressComponent type={ProgressType.Secondary} value={20} maxValue={300} endLabel={300} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h3>With title</h3>
        <ProgressComponent type={ProgressType.Secondary} value={20} maxValue={300} endLabel={300} title="Title" />
      </div>
    </div>
  );
}
