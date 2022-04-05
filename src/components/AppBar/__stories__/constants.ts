import { COMPONENT_STORY } from '../../storybook/constants';
import { ComponentStoryType } from '../../storybook/types';

const COMPONENT_NAME = 'AppBar';

export const COMPONENT: ComponentStoryType = {
  TITLE: COMPONENT_NAME,
  DESCRIPTION: `
  ${COMPONENT_STORY.DESCRIPTION}

  The App Bar displays information and actions relating to the current screen.

  ${COMPONENT_STORY.USAGE}

  The top App Bar provides content and actions related to the current screen. It's used for branding, screen titles, navigation, and actions.
  `,
};
