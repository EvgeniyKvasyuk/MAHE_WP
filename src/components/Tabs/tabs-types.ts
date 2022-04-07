import { TabProps as TabPropsMaterial } from '@mui/material/Tab';
import { TabsProps as TabsPropsMaterial } from '@mui/material/Tabs';

export type TabProps = {
  id?: string | number;
} & Pick<TabPropsMaterial, 'label' | 'icon'>;

export type TabsProps = {
  tabList: Array<TabProps>;
  className?: string;
  onChange?: TabsPropsMaterial['onChange'];
} & Pick<TabsPropsMaterial, 'value' | 'selectionFollowsFocus'>;
