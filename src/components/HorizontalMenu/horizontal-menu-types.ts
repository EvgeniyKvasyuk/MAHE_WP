import { FlippersEnum } from '@modules/flippers';

export type SubMenuItemType = {
  to: string;
  label: string;
};

export type TabProps = {
  id: number;
  to: string;
  label: string;
  subMenuItems?: Array<SubMenuItemType>;
  flipper?: FlippersEnum;
};
