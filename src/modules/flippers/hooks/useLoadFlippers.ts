import { useDispatch, useSelector } from 'react-redux';

import { StatusEnum } from '@common/constants';
import { useIgnoreEffectDeps } from '@common/hooks';

import { flippersStatusSelector, getFlippers } from '../store';

export function useLoadFlippers() {
  const flippersStatus = useSelector(flippersStatusSelector);
  const dispatch = useDispatch();

  useIgnoreEffectDeps(() => {
    if ([StatusEnum.Uninitialized, StatusEnum.Rejected].includes(flippersStatus)) {
      dispatch(getFlippers());
    }
  });
}
