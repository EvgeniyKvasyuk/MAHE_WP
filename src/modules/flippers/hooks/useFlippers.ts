import { useCallback } from 'react';

import { useSelector } from 'react-redux';

import { FlippersEnum } from '../constants';
import { flippersSelector } from '../store';

type ResultType = (flipper: FlippersEnum) => boolean; // getFlipperValue;

export const useFlippers = (): ResultType => {
  const flippers = useSelector(flippersSelector);

  const getFlipperValue = useCallback(
    (flipper: FlippersEnum): boolean => flippers[flipper]?.value ?? false,
    [flippers],
  );

  return getFlipperValue;
};
