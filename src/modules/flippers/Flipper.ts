import { ReactElement } from 'react';

import { FlippersEnum } from './constants';
import { useFlippers } from './hooks/useFlippers';

type FlipperProps = {
  flipper: FlippersEnum | Array<FlippersEnum>;
  children: ReactElement;
};

export function Flipper({ flipper, children }: FlipperProps) {
  const getFlipperValue = useFlippers();

  const hide = Array.isArray(flipper) ? flipper.some((name) => getFlipperValue(name)) : getFlipperValue(flipper);

  return hide ? null : children;
}
