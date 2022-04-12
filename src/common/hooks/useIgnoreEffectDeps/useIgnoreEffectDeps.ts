import { useEffect, useRef } from 'react';

import { noop } from '../../utils/noop';

export function useIgnoreEffectDeps(callback: () => void, deps: any[] = []): void {
  const callbackRef = useRef(noop);

  callbackRef.current = callback;

  useEffect(() => {
    return callbackRef?.current?.();
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
