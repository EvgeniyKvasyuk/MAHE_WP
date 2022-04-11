import React from 'react';

import { render, screen } from '@testing-library/react';

import { ErrorBoundary } from './ErrorBoundary';

function FallbackComponent() {
  return <div data-testid="error-boundary">Something Went Wrong</div>;
}

const ComponentThatMightError = () => {
  throw new Error();
};

describe('Error Boundary', () => {
  test('Error Boundary after error should display fallback UI', () => {
    render(
      <ErrorBoundary fallBackComponent={FallbackComponent}>
        <ComponentThatMightError />
      </ErrorBoundary>,
    );

    expect(screen.getByTestId('error-boundary')).toBeVisible();
  });
});
