import * as React from 'react';

import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

import { ErrorBoundaryProps } from './error-boundary-types';
import { handleError } from './utils';

export function ErrorBoundary({ children, fallBackComponent }: ErrorBoundaryProps) {
  return (
    <ReactErrorBoundary FallbackComponent={fallBackComponent} onError={handleError}>
      {children}
    </ReactErrorBoundary>
  );
}
