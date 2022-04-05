import * as React from 'react';

import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

import { handleError } from './utils';
import { ErrorBoundaryProps } from './error-boundary-types';

export function ErrorBoundary({ children, fallBackComponent }: ErrorBoundaryProps) {
  return (
    <ReactErrorBoundary FallbackComponent={fallBackComponent} onError={handleError}>
      {children}
    </ReactErrorBoundary>
  );
}
