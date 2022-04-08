import { COMPONENT_STORY } from '../../storybook/constants';
import { ComponentStoryType } from '../../storybook/types';

const COMPONENT_NAME = 'SvgIcon';

export const COMPONENT: ComponentStoryType = {
  TITLE: COMPONENT_NAME,
  DESCRIPTION: `
  ${COMPONENT_STORY.DESCRIPTION}

   The SvgIcon is used to wrap your svg's .
  `,
};
