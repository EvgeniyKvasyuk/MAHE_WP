import { ComponentType, ReactNode } from 'react';

import { FallbackProps } from 'react-error-boundary';

export type ErrorBoundaryProps = {
  children: ReactNode;
  fallBackComponent: ComponentType<FallbackProps>;
};
