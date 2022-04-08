import React from 'react';

import { ReactComponent as MedicalClipBoardIcon } from '@assets/medicalclipboard.svg';
import { ReactComponent as MessageIcon } from '@assets/message.svg';
import { ReactComponent as MicroScopeIcon } from '@assets/microscope.svg';
import { ReactComponent as TrophyIcon } from '@assets/trophy.svg';

type IconType = {
  [key: string]: React.FC;
};
export const ICONS: IconType = {
  message: MessageIcon,
  medicalBoard: MedicalClipBoardIcon,
  microScope: MicroScopeIcon,
  trophy: TrophyIcon,
};
