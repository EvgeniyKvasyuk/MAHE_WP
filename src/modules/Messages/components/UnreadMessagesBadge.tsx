import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { StatusEnum } from '@common/constants';
import { useIgnoreEffectDeps } from '@common/hooks';
import { NumberCircle, SizesEnum } from '@components/NumberCircle';
import { getUnreadMessagesCount, unreadCountSelector } from '@modules/Messages';

export function UnreadMessagesBadge({ size = SizesEnum.Medium }) {
  const dispatch = useDispatch();
  const { count, status } = useSelector(unreadCountSelector);

  useIgnoreEffectDeps(() => {
    if ([StatusEnum.Uninitialized, StatusEnum.Rejected].includes(status)) dispatch(getUnreadMessagesCount());
  });

  if (!count) {
    return null;
  }

  return <NumberCircle count={count} size={size} />;
}
