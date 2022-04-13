import { COMPONENT_STORY } from '../../storybook/constants';
import { ComponentStoryType } from '../../storybook/types';

const COMPONENT_NAME = 'Progress';

export const COMPONENT: ComponentStoryType = {
  TITLE: COMPONENT_NAME,
  DESCRIPTION: `
  ${COMPONENT_STORY.DESCRIPTION}

   Progress is component to show state of readiness of something
  `,
};
