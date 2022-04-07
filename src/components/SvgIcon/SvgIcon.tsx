import React from 'react';

import SvgIconMaterial, { SvgIconProps as SvgIconPropsMaterial } from '@mui/material/SvgIcon';

import { ICONS } from './icons';
import { IconType } from './types';

export type SvgIconProps = {
  icon: IconType;
} & Pick<SvgIconPropsMaterial, 'children' | 'className' | 'fontSize' | 'style'>;

export function SvgIcon({ icon, className, fontSize, style }: SvgIconProps) {
  const Icon = typeof icon === 'string' ? ICONS[icon] : icon;

  return (
    <SvgIconMaterial style={style} className={className} fontSize={fontSize}>
      <Icon />
    </SvgIconMaterial>
  );
}
