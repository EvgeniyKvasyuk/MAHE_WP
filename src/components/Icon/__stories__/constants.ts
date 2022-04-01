import { COMPONENT_STORY } from '../../storybook/constants';
import { ComponentStoryType } from '../../storybook/types';

const COMPONENT_NAME = 'Icon';

export const COMPONENT: ComponentStoryType = {
  TITLE: COMPONENT_NAME,
  DESCRIPTION: `
  ${COMPONENT_STORY.DESCRIPTION}

  MUI Icons.

  ${COMPONENT_STORY.USAGE}

  The Icon component will display an icon from any icon font that supports ligatures.
  To use an icon simply wrap the icon name (font ligature) with the Icon
  `,
};
