import React from 'react';

import { Meta, Story } from '@storybook/react';

import { SvgIcon } from '@components/SvgIcon';

import { Accordion as AccordionComponent, AccordionProps } from '../Accordion';
import { AccordionDetails, AccordionSummary } from '../components';
import { COMPONENT } from './constants';

export default {
  title: COMPONENT.TITLE,
  component: AccordionComponent,

  parameters: {
    docs: {
      description: {
        component: COMPONENT.DESCRIPTION,
      },
    },
  },
} as Meta<AccordionProps>;

export const Accordion: Story<AccordionProps> = function () {
  return (
    <div style={{ width: '250px' }}>
      <AccordionComponent square>
        <AccordionSummary expandIcon={<SvgIcon icon="chevronDown" />}>Accordion</AccordionSummary>
        <AccordionDetails>Im an Accordion</AccordionDetails>
      </AccordionComponent>
    </div>
  );
};
