import { COMPONENT_STORY } from '../../storybook/constants';
import { ComponentStoryType } from '../../storybook/types';

const COMPONENT_NAME = 'ActionButton';

export const COMPONENT: ComponentStoryType = {
  TITLE: COMPONENT_NAME,
  DESCRIPTION: `
  ${COMPONENT_STORY.DESCRIPTION}

   ActionButtons allow users to take actions, and make choices, with a single tap, has special design with icons
  `,
};
