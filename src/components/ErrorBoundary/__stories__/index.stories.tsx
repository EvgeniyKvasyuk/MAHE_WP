import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react';

import { NotFound } from '@components/NotFound';

import { ErrorBoundary as ErrorBoundaryComponent } from '../ErrorBoundary';
import { ErrorBoundaryProps } from '../error-boundary-types';
import { COMPONENT } from './constants';

export default {
  title: COMPONENT.TITLE,
  component: ErrorBoundaryComponent,
  parameters: {
    docs: {
      description: {
        component: COMPONENT.DESCRIPTION,
      },
    },
  },
} as Meta<ErrorBoundaryProps>;

export const ErrorBoundary: Story<ErrorBoundaryProps> = () => {
  const [errorState, setErrorState] = useState(false);

  const ThrowError = () => {
    throw new Error();
  };
  const handleError = () => {
    setErrorState(true);
  };

  return (
    <>
      <button style={{ padding: '0.5rem' }} type="button" onClick={handleError}>
        Throw Error
      </button>
      <ErrorBoundaryComponent fallBackComponent={NotFound}>
        {errorState ? <ThrowError /> : <h1>Hello There</h1>}
      </ErrorBoundaryComponent>
    </>
  );
};
