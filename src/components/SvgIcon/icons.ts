import { ReactComponent as AccountCircleIcon } from '@assets/account_circle.svg';
import { ReactComponent as ArrowRightIcon } from '@assets/arrow_right.svg';
import { ReactComponent as BurgerIcon } from '@assets/burger.svg';
import { ReactComponent as ChevronDownIcon } from '@assets/chevron_down.svg';
import { ReactComponent as CloseIcon } from '@assets/close.svg';
import { ReactComponent as MainLogoIcon } from '@assets/main_logo.svg';
import { ReactComponent as MedicalClipBoardIcon } from '@assets/medicalclipboard.svg';
import { ReactComponent as MessageIcon } from '@assets/message.svg';
import { ReactComponent as MicroScopeIcon } from '@assets/microscope.svg';
import { ReactComponent as PhoneIcon } from '@assets/phone.svg';
import { ReactComponent as RecordsIcon } from '@assets/records.svg';
import { ReactComponent as RefillIcon } from '@assets/refill.svg';
import { ReactComponent as ScheduleIcon } from '@assets/schedule.svg';
import { ReactComponent as SignOutIcon } from '@assets/sign_out.svg';
import { ReactComponent as TrophyIcon } from '@assets/trophy.svg';
import { ReactComponent as UnionIcon } from '@assets/union.svg';

export const ICONS = {
  accountCircle: AccountCircleIcon,
  arrowRight: ArrowRightIcon,
  burger: BurgerIcon,
  chevronDown: ChevronDownIcon,
  close: CloseIcon,
  mainLogo: MainLogoIcon,
  medicalBoard: MedicalClipBoardIcon,
  message: MessageIcon,
  microScope: MicroScopeIcon,
  phone: PhoneIcon,
  records: RecordsIcon,
  refill: RefillIcon,
  schedule: ScheduleIcon,
  signOut: SignOutIcon,
  trophy: TrophyIcon,
  union: UnionIcon,
} as const;

export type IconKey = keyof typeof ICONS;
