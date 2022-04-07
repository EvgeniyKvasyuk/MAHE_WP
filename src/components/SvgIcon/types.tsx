import { FunctionComponent } from 'react';

import { ICONS } from './icons';

export type IconType = FunctionComponent | keyof typeof ICONS;
