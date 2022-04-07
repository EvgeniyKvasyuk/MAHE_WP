import { COMPONENT_STORY } from '../../storybook/constants';
import { ComponentStoryType } from '../../storybook/types';

const COMPONENT_NAME = 'Button';

export const COMPONENT: ComponentStoryType = {
  TITLE: COMPONENT_NAME,
  DESCRIPTION: `
  ${COMPONENT_STORY.DESCRIPTION}

   Buttons allow users to take actions, and make choices, with a single tap.
  `,
};
